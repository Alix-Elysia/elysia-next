import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#efede8]/90 shadow-md backdrop-blur-md border-b border-[#d5c8b5]' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <a className="flex items-center">
              <Image src="/logo-elysia.png" alt="Logo Elysia" width={120} height={40} priority />
            </a>
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-10 text-[#6f442e] font-medium text-sm tracking-wide">
          <Link href="/"><a className="hover:text-[#2c1b11] transition">Accueil</a></Link>
          <Link href="/inscription"><a className="hover:text-[#2c1b11] transition">Inscription</a></Link>
        </nav>

        {/* Burger */}
        <button onClick={toggleMenu} className="md:hidden w-8 h-8 relative focus:outline-none" aria-label="Ouvrir le menu">
          <span className={`absolute h-0.5 w-full bg-[#6f442e] transform transition duration-300 ${menuOpen ? 'rotate-45 top-3.5' : 'top-1'}`} />
          <span className={`absolute h-0.5 w-full bg-[#6f442e] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'top-3.5'}`} />
          <span className={`absolute h-0.5 w-full bg-[#6f442e] transform transition duration-300 ${menuOpen ? '-rotate-45 top-3.5' : 'top-6'}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed top-0 right-0 w-3/4 max-w-xs h-screen bg-[#efede8] z-40 shadow-lg px-6 py-14 flex flex-col"
          >
            <ul className="flex flex-col gap-6 text-[#6f442e] font-medium text-lg">
              <li><Link href="/" onClick={closeMenu}><a>Accueil</a></Link></li>
              <li><Link href="/a-propos" onClick={closeMenu}><a>À propos</a></Link></li>
              <li><Link href="/sanctuaire" onClick={closeMenu}><a>Sanctuaire</a></Link></li>
              <li><Link href="/gardien" onClick={closeMenu}><a>IA Le Gardien</a></Link></li>
              <li><Link href="/inscription" onClick={closeMenu}><a>Inscription</a></Link></li>
              <li><Link href="/contact" onClick={closeMenu}><a>Contact</a></Link></li>
              <li><Link href="/login" onClick={closeMenu}><a>Connexion</a></Link></li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
