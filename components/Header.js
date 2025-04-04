import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#f0ede6]/80 backdrop-blur-md border-b border-[#cbb9a9] shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo centré à gauche */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" passHref>
            <a className="flex items-center">
              <Image src="/logo-elysia.png" alt="Élysia" width={130} height={40} />
            </a>
          </Link>
        </motion.div>

        {/* Liens desktop à droite */}
        <nav className="hidden md:flex items-center gap-10 text-[#6f442e] text-sm font-medium tracking-wide">
          <Link href="/"><a className="hover:text-[#2d1d14]">Accueil</a></Link>
          <Link href="/a-propos"><a className="hover:text-[#2d1d14]">À propos</a></Link>
          <Link href="/sanctuaire"><a className="hover:text-[#2d1d14]">Sanctuaire</a></Link>
          <Link href="/gardien"><a className="hover:text-[#2d1d14]">IA</a></Link>
          <Link href="/inscription"><a className="hover:text-[#2d1d14]">Inscription</a></Link>
        </nav>

        {/* Hamburger mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden w-8 h-8 relative focus:outline-none"
          aria-label="Ouvrir le menu"
        >
          <span className={`absolute h-0.5 w-6 bg-[#6f442e] transition transform ${menuOpen ? 'rotate-45 top-3' : 'top-1'}`} />
          <span className={`absolute h-0.5 w-6 bg-[#6f442e] transition-all ${menuOpen ? 'opacity-0' : 'top-3'}`} />
          <span className={`absolute h-0.5 w-6 bg-[#6f442e] transition transform ${menuOpen ? '-rotate-45 top-3' : 'top-5'}`} />
        </button>
      </div>

      {/* Mobile menu slide-in */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 right-0 w-4/5 max-w-sm h-screen bg-[#f7f4ee] z-50 shadow-xl px-8 py-16"
          >
            <ul className="flex flex-col gap-6 text-[#6f442e] text-lg font-medium">
              <li><Link href="/" passHref><a onClick={closeMenu}>Accueil</a></Link></li>
              <li><Link href="/a-propos" passHref><a onClick={closeMenu}>À propos</a></Link></li>
              <li><Link href="/sanctuaire" passHref><a onClick={closeMenu}>Sanctuaire</a></Link></li>
              <li><Link href="/gardien" passHref><a onClick={closeMenu}>IA</a></Link></li>
              <li><Link href="/inscription" passHref><a onClick={closeMenu}>Inscription</a></Link></li>
              <li><Link href="/contact" passHref><a onClick={closeMenu}>Contact</a></Link></li>
              <li><Link href="/login" passHref><a onClick={closeMenu}>Connexion</a></Link></li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
