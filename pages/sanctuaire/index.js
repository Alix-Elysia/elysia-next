// pages/sanctuaire/index.js

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Sanctuaire() {
  // Exemple d'état local pour simuler des souvenirs
  const [souvenirs, setSouvenirs] = useState([
    { id: 1, titre: 'Souvenir #1', contenu: 'Ce moment restera mémorable…' },
    { id: 2, titre: 'Souvenir #2', contenu: 'Un sourire, un instant précieux.' },
  ]);

  function handleAddSouvenir() {
    // Simule l'ajout d'un nouveau souvenir
    const newId = souvenirs.length + 1;
    setSouvenirs((prev) => [
      ...prev,
      { id: newId, titre: `Souvenir #${newId}`, contenu: 'Nouveau souvenir...' },
    ]);
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-[#f5f1e8] to-[#d6cfc4] text-[#6f442e] px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-6"
      >
        <h1 className="text-4xl font-bold mb-2">Votre Sanctuaire</h1>
        <p className="max-w-xl mx-auto text-lg">
          Un écrin pour préserver et partager les moments qui façonnent votre histoire.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-4xl"
      >
        {/* Bouton d'ajout en haut à droite */}
        <div className="flex justify-end mb-8">
          <button
            onClick={handleAddSouvenir}
            className="bg-[#6f442e] text-white px-5 py-2 rounded-full hover:bg-[#5a3a25] transition duration-300 font-medium shadow-lg"
          >
            Ajouter un souvenir
          </button>
        </div>

        {/* Liste de souvenirs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {souvenirs.map((s) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: s.id * 0.15 }}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg hover:-translate-y-1 transform transition-all"
            >
              <h2 className="text-xl font-semibold mb-2">{s.titre}</h2>
              <p className="mb-2">{s.contenu}</p>
              <span className="text-sm text-gray-500">
                {/* Ex. date ou autre métadonnée */}
                Ajouté récemment
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
