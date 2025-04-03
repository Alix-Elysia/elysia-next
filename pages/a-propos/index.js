import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function APropos() {
  // Liste des 4 images présentes dans public/images
  const images = [
    'image-dambiance-1.webp',
    'image-dambiance-2.webp',
    'image-dambiance-3.webp',
    'image-dambiance-4.webp',
  ];

  return (
    <div>
      <Header />

      {/* Section principale */}
      <section className="relative min-h-screen bg-[#efede8] text-[#6f442e] px-6 py-16 flex flex-col items-center">
        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          À propos d’Élysia
        </motion.h1>

        {/* Texte principal : histoire et mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl text-center text-lg leading-relaxed space-y-6 mb-12"
        >
          <p>
            Élysia est née de l’initiative de cinq étudiants en Master, animés par la volonté
            de préserver la mémoire à l’ère numérique. Notre projet vise à proposer un
            service humain permettant de préserver et de transmettre les
            souvenirs des personnes chères, grâce à une plateforme digitale.
          </p>
          <p>
            Inspirés par la symbolique des Îles des Bienheureux, lieu mythologique dédié
            à la mémoire et à la paix, nous avons imaginé un espace où chacun peut laisser
            une trace, partager son histoire et créer un lien durable avec ses proches.
          </p>
          <p>
          </p>
        </motion.div>

        {/* Galerie d'images d’ambiance avec animations */}
        <div className="grid grid-cols-2 gap-6 max-w-4xl">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={`/images/${img}`}
                alt={`Ambiance ${index + 1}`}
                width={500}
                height={350}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>

        {/* Phrase finale */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 text-center max-w-xl text-sm"
        >
          Parce que vos souvenirs méritent l’éternité, Élysia est là pour les préserver.
        </motion.p>
      </section>

      <Footer />
    </div>
  );
}
