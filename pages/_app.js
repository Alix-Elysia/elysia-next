import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Élysia – Vos souvenirs méritent l’éternité</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Élysia est un sanctuaire numérique pour préserver vos souvenirs les plus précieux." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="pt-28 pb-16 flex justify-center w-full">
        <div className="w-full max-w-6xl px-4 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={router.route}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default MyApp;
