// pages/sanctuaire/index.js
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Sanctuaire() {
  // Imaginons qu'on aura plus tard un fetch en base pour récupérer les souvenirs
  const [souvenirs, setSouvenirs] = useState([
    { id: 1, titre: 'Souvenir #1', contenu: 'Le jour où tout a commencé…' },
    { id: 2, titre: 'Souvenir #2', contenu: 'Un sourire, un instant précieux.' },
  ]);

  function handleAddSouvenir() {
    // Logique pour ajouter un souvenir (ou alors on fera un modal, un form, etc.)
    const newId = souvenirs.length + 1;
    setSouvenirs([
      ...souvenirs,
      { id: newId, titre: `Souvenir #${newId}`, contenu: "Nouveau souvenir..." },
    ]);
  }

  return (
    <section className="min-h-screen bg-[#f5f1e8] flex flex-col items-center p-6 text-[#6f442e]">
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Bienvenue dans votre Sanctuaire
      </motion.h1>

      <motion.p
        className="max-w-lg mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Ici, vous conservez vos souvenirs les plus précieux. Ajoutez-en de nouveaux,
        consultez et partagez-les avec vos proches.
      </motion.p>

      <div className="w-full max-w-3xl">
        <div className="flex justify-end mb-4">
          <button
            onClick={handleAddSouvenir}
            className="bg-[#6f442e] text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
          >
            Ajouter un souvenir
          </button>
        </div>

        {/* Liste de souvenirs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {souvenirs.map((s) => (
            <motion.div
              key={s.id}
              className="bg-white rounded-lg shadow p-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: s.id * 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-2">{s.titre}</h2>
              <p>{s.contenu}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
