import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#d6cfc4',
        color: '#6f442e',
      }}
    >
      © 2025 Élysia — Vos souvenirs méritent l’éternité.
    </motion.footer>
  );
}
