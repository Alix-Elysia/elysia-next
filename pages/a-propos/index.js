import Image from 'next/image';
import { motion } from 'framer-motion';

export default function APropos() {
  const images = [
    'image-dambiance-1.webp',
    'image-dambiance-2.webp',
    'image-dambiance-3.webp',
    'image-dambiance-4.webp',
  ];

  return (
    <section className="min-h-screen bg-[#efede8] text-[#6f442e] flex flex-col md:flex-row">
      {/* Colonne de gauche : images d'ambiance animées */}
      <div className="md:w-1/2 w-full flex flex-col gap-4 p-6 items-center justify-center">
        {images.map((img, index) => (
          <motion.div
            key={img}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="overflow-hidden rounded-xl shadow-lg w-full max-w-md"
          >
            <Image
              src={`/images/${img}`}
              alt={`Ambiance ${index + 1}`}
              width={600}
              height={400}
              className="object-cover w-full h-auto hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        ))}
      </div>

      {/* Colonne de droite : texte */}
      <div className="md:w-1/2 w-full p-6 flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left"
        >
          À propos d’Élysia
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg leading-relaxed space-y-6 text-center md:text-left"
        >
          <p>
            Élysia est née de l’initiative de cinq étudiants en Master, animés par la volonté de réinventer
            l’hommage à l’ère numérique. Notre projet vise à proposer un service innovant et humain,
            permettant de préserver et de transmettre les souvenirs des personnes chères, grâce à une
            plateforme digitale.
          </p>
          <p>
            Inspirés par la symbolique des Îles des Bienheureux, lieu mythologique dédié à la mémoire et à
            la paix, nous avons imaginé un espace où chacun peut laisser une trace, partager son histoire et
            créer un lien durable avec ses proches.
          </p>
          <p>
            Élysia est plus qu’un hommage numérique : c’est une expérience intime, apaisante et tournée vers
            la transmission.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
