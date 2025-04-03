import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export default NextAuth({
  adapter: PrismaAdapter(prisma), // on branche la base PostgreSQL via Prisma
  session: {
    strategy: 'jwt', // pour stocker les infos en JWT
  },
  providers: [
    CredentialsProvider({
      name: 'Identifiants', 
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Mot de passe', type: 'password' },
      },
      async authorize(credentials) {
        // On recherche l'utilisateur dans la base via Prisma
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })

        if (!user) {
          // Pas d'utilisateur associé à cet email
          throw new Error("Aucun compte associé à cet email")
        }

        // Vérifier le mot de passe (hashé avec bcrypt)
        const match = await bcrypt.compare(credentials.password, user.password)
        if (!match) {
          throw new Error('Mot de passe incorrect')
        }

        // Tout est OK, on retourne l'objet user
        return {
          id: user.id,
          email: user.email,
          name: user.name,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user
      }
      return token
    },
    async session({ session, token }) {
      if (token?.user) {
        session.user = token.user
      }
      return session
    },
  },
})
