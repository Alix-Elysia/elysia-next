// pages/gardien/index.js
import { useState } from 'react';

export default function GardienMemoires() {
  const [question, setQuestion] = useState('');
  const [reponse, setReponse] = useState('');

  async function handleAsk() {
    // Logique pour envoyer la question à ton IA (via un endpoint d’API)
    // par exemple: fetch('/api/gardien', { method: 'POST', body: JSON.stringify({ question }) })
    // pour l'instant on simule :
    setReponse("Bonjour, je suis le gardien des mémoires, comment puis-je vous aider ?");
  }

  return (
    <section className="min-h-screen bg-[#f5f1e8] text-[#6f442e] p-6">
      <h1 className="text-3xl font-bold mb-4">Gardien des Mémoires (IA)</h1>
      <p className="mb-6">
        Ici, le Gardien des Mémoires vous pose des questions et vous aide à
        raconter votre histoire grâce à l’IA.
      </p>
      <div className="max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Posez votre question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-2 rounded border mb-4"
        />
        <button
          onClick={handleAsk}
          className="bg-[#6f442e] text-white px-4 py-2 rounded hover:bg-opacity-90"
        >
          Interroger l'IA
        </button>

        {reponse && (
          <div className="mt-6 bg-white rounded p-4 shadow">
            <h2 className="font-semibold mb-2">Réponse :</h2>
            <p>{reponse}</p>
          </div>
        )}
      </div>
    </section>
  );
}
