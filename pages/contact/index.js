import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto my-16 p-6 bg-[#f5f1e8] text-[#6f442e] rounded-lg shadow-lg">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center mb-6"
      >
        Contactez-nous
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center text-lg mb-8"
      >
        Une question, un besoin, une suggestion ? Nous sommes à votre écoute.
      </motion.p>

      <form
        action="https://formspree.io/f/mvgkwkwv"
        method="POST"
        className="flex flex-col gap-6"
      >
        <motion.input
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          type="email"
          name="email"
          placeholder="Votre email"
          required
          className="p-4 border border-[#cfc6b8] rounded-xl text-[#6f442e] focus:outline-none focus:ring-2 focus:ring-[#6f442e]"
        />
        <motion.textarea
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          name="message"
          placeholder="Votre message"
          rows="6"
          required
          className="p-4 border border-[#cfc6b8] rounded-xl text-[#6f442e] focus:outline-none focus:ring-2 focus:ring-[#6f442e]"
        ></motion.textarea>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          type="submit"
          className="bg-[#6f442e] text-white py-3 px-6 rounded-xl cursor-pointer hover:bg-[#5a3a25] transition duration-300"
        >
          Envoyer
        </motion.button>
      </form>
    </section>
  );
}
