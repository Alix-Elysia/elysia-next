import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ textAlign: 'center', padding: '60px 20px' }}
    >
      {/* Hero */}
      <section style={{ marginBottom: '60px' }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '20px' }}>Élysia</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', marginBottom: '30px' }}>
          Vos souvenirs méritent l’éternité. Préservez-les dans un espace intime et sécurisé.
        </p>
        <Link href="/inscription">
          <button style={{ backgroundColor: '#6f442e', color: '#fff', padding: '12px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
            Créer mon espace
          </button>
        </Link>
      </section>

      {/* Produits */}
      <section style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{ backgroundColor: '#cfc6b8', padding: '20px', borderRadius: '12px', width: '280px' }}
        >
          <h3 style={{ marginBottom: '10px' }}>Le Sanctuaire</h3>
          <p style={{ fontSize: '0.95rem' }}>Un espace numérique unique pour conserver vos souvenirs précieux.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{ backgroundColor: '#d6cfc4', padding: '20px', borderRadius: '12px', width: '280px' }}
        >
          <h3 style={{ marginBottom: '10px' }}>Le Livre des Mémoires</h3>
          <p style={{ fontSize: '0.95rem' }}>Transformez vos souvenirs en un livre élégant à transmettre à vos proches.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{ backgroundColor: '#cfc6b8', padding: '20px', borderRadius: '12px', width: '280px' }}
        >
          <h3 style={{ marginBottom: '10px' }}>Les Objets Connectés</h3>
          <p style={{ fontSize: '0.95rem' }}>Des accessoires QR code pour accéder à vos souvenirs, partout.</p>
        </motion.div>
      </section>
    </motion.div>
  );
}
