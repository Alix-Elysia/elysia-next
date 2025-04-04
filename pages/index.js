import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section className="text-[#6f442e] text-center py-16 px-6">
      {/* Titre principal animé */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-6 leading-snug"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Bienvenue sur <span className="text-[#3d2b1e]">Élysia</span>
      </motion.h1>

      {/* Slogan */}
      <motion.p
        className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Offrez à vos souvenirs un sanctuaire numérique. Avec Élysia, préservez les moments qui comptent pour toujours.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link href="/inscription">
          <a className="inline-block bg-[#6f442e] text-white text-sm md:text-base font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#50321f] transition">
            Créer mon espace
          </a>
        </Link>
      </motion.div>

      {/* Le Gardien */}
      <motion.div
        className="mt-24 text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Le Gardien des Mémoires</h2>
        <p className="text-base md:text-lg font-light leading-relaxed mb-4">
          Il vous guide pour raconter votre histoire. Chaque souvenir devient un trésor préservé pour vos proches.
        </p>
        <Link href="/gardien">
          <a className="text-[#6f442e] font-medium underline hover:text-[#3d2b1e] transition">Découvrir Le Gardien</a>
        </Link>
      </motion.div>

      {/* Fonctionnement */}
      <motion.div
        className="mt-24 text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Comment ça marche ?</h2>
        <ol className="space-y-6 text-base md:text-lg font-light leading-relaxed list-decimal list-inside">
          <li>
            <strong>Créez votre espace :</strong> Inscrivez-vous pour ouvrir votre sanctuaire personnel.
          </li>
          <li>
            <strong>Partagez vos souvenirs :</strong> Laissez-vous guider par notre IA bienveillante.
          </li>
          <li>
            <strong>Transmettez-les :</strong> Préservez-les pour ceux qui comptent.
          </li>
        </ol>
      </motion.div>

      {/* Témoignages */}
      <motion.div
        className="mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Ils parlent d’Élysia</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            {
              nom: 'Claire D.',
              texte: 'J’ai pu raconter ma vie à mes petits-enfants, même de loin. C’est précieux.',
            },
            {
              nom: 'Paul M.',
              texte: 'Le Gardien m’a permis de revivre mes plus beaux souvenirs en douceur.',
            },
            {
              nom: 'Fatou S.',
              texte: 'Simple et émouvant. Je me sens plus apaisée de laisser une trace.',
            },
          ].map((avis, i) => (
            <motion.div
              key={i}
              className="bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
            >
              <p className="italic mb-3">“{avis.texte}”</p>
              <p className="text-sm font-semibold text-[#3d2b1e]">{avis.nom}</p>
            </motion.div>
          ))}
        </div>

        {/* Voir plus */}
        <div className="mt-6">
          <Link href="/temoignages">
            <a className="text-sm text-[#6f442e] underline hover:text-[#3d2b1e]">Voir plus d’avis</a>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
