import { motion } from 'framer-motion';

export default function Inscription() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ maxWidth: '500px', margin: '60px auto', padding: '20px', textAlign: 'center' }}
    >
      <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>Créer mon espace</h1>
      <p style={{ marginBottom: '30px', fontSize: '1rem' }}>
        Rejoignez Élysia et commencez à préserver vos souvenirs les plus précieux.
      </p>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          name="name"
          placeholder="Votre prénom"
          required
          style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cfc6b8' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          required
          style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cfc6b8' }}
        />
        <input
          type="password"
          name="password"
          placeholder="Votre mot de passe"
          required
          style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cfc6b8' }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#6f442e',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Créer mon espace
        </button>
      </form>
    </motion.section>
  );
}
