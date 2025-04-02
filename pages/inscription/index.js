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
          style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cfc6b8
