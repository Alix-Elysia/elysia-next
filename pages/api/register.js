import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  const { email, password, name } = req.body

  // Vérifier si l'email existe déjà
  const existingUser = await prisma.user.findUnique({ where: { email } })
  if (existingUser) {
    return res.status(400).json({ error: 'Email déjà utilisé' })
  }

  // Hash du mot de passe
  const hash = await bcrypt.hash(password, 10)

  // Créer l'utilisateur
  const newUser = await prisma.user.create({
    data: {
      email,
      password: hash,
      name,
    },
  })

  return res.status(200).json({
    message: 'Inscription réussie',
    user: {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
    },
  })
}
