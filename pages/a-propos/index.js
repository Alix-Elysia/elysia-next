import Header from '../../components/Header';
import Footer from '../../components/Footer';
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
    <div>
      <Header />

      <section className="min-h-screen bg-[#efede8] text-[#6f442e] flex flex-col md:flex-row">
        {/* Colonne de GAUCHE: images d'ambiance animées */}
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

        {/* Colonne de DROITE: texte */}
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
