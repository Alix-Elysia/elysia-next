import { motion } from 'framer-motion';

export default function Temoignages() {
  const avis = [
    {
      nom: 'Marc, 67 ans',
      texte: "Grâce à Élysia, j’ai pu transmettre mes souvenirs à mes enfants avec douceur. C’est plus qu’un outil, c’est un lien."
    },
    {
      nom: 'Amélie, 39 ans',
      texte: "L’expérience est fluide, humaine et touchante. Je n’imaginais pas autant d’émotion dans un service numérique."
    },
    {
      nom: 'Hugo, 28 ans',
      texte: "Ma mère utilise Élysia chaque semaine. Cela lui redonne le sourire et crée un précieux héritage pour nous."
    },
    {
      nom: 'Fatima, 52 ans',
      texte: "Avec Élysia, j’ai redécouvert des souvenirs enfouis. Le Gardien sait poser les bonnes questions."
    },
    {
      nom: 'Lucien, 75 ans',
      texte: "Je me sens écouté, valorisé. Chaque souvenir devient un trésor numérique. Merci."
    },
    {
      nom: 'Chloé, 33 ans',
      texte: "C’est un vrai pont entre générations. Mes enfants découvriront qui j’étais, au-delà des photos."
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-[#6f442e]">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Témoignages
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {avis.map((avis, index) => (
          <motion.div
            key={index}
            className="bg-[#f5f1e8] p-6 rounded-lg shadow-sm border border-[#e0d6ca]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <p className="text-sm italic mb-4">“{avis.texte}”</p>
            <p className="text-sm font-semibold">— {avis.nom}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
