import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#efede8]/70 backdrop-blur-xl border-b border-[#ded6ca] shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" onClick={closeMenu}>
          <a className="flex items-center">
            <Image src="/logo-elysia.png" alt="Élysia Logo" width={110} height={40} />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 text-[#6f442e] font-medium text-sm tracking-wide">
          <Link href="/"><a className="hover:text-[#3d2b1e] transition">Accueil</a></Link>
          <Link href="/inscription"><a className="hover:text-[#3d2b1e] transition">Inscription</a></Link>
        </nav>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden w-8 h-8 relative focus:outline-none"
          aria-label="Ouvrir le menu"
        >
          <span className={`absolute h-0.5 w-8 bg-[#6f442e] transform transition duration-300 ease-in-out ${menuOpen ? 'rotate-45 top-3.5' : 'top-1'}`} />
          <span className={`absolute h-0.5 w-8 bg-[#6f442e] transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'top-3.5'}`} />
          <span className={`absolute h-0.5 w-8 bg-[#6f442e] transform transition duration-300 ease-in-out ${menuOpen ? '-rotate-45 top-3.5' : 'top-6'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 right-0 w-3/4 max-w-xs h-screen bg-[#efede8] z-40 shadow-lg px-6 py-12 flex flex-col gap-6"
          >
            <ul className="text-[#6f442e] font-medium text-lg space-y-5">
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
