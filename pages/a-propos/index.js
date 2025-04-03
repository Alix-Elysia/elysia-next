import Image from 'next/image'
import { motion } from 'framer-motion'

export default function APropos() {
  return (
    <section className="relative min-h-screen bg-[#f5f1e8] flex flex-col items-center justify-center text-[#6f442e] px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">À propos d’Élysia</h1>
      <p className="text-center max-w-2xl mb-12 text-lg leading-relaxed">
        Chez Élysia, nous croyons que chaque souvenir mérite d’être préservé
        dans un écrin d’élégance. Notre mission est de vous offrir un espace numérique
        intime, rassurant et chaleureux pour raconter votre histoire, transmettre vos valeurs,
        et honorer ceux qui comptent.
      </p>

      {/* Animation d'images d’ambiance */}
      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        {['image-dambiance-1.webp', 'image-dambiance-2.webp', 'image-dambiance-3.webp', 'image-dambiance-6.webp'].map(
          (img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={`/images/${img}`} // Veuillez vous assurer que les images sont placées dans /public/images/
                alt={`Ambiance ${index + 1}`}
                width={500}
                height={350}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          )
        )}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="mt-12 text-center max-w-xl text-sm text-[#6f442e]"
      >
        Parce que vos souvenirs méritent l’éternité, Élysia est là pour les préserver.
      </motion.p>
    </section>
  )
}
