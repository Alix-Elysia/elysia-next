import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#efede8]/70 backdrop-blur-sm border-b border-[#ddd2c4] shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link href="/" onClick={closeMenu}>
          <a className="flex items-center">
            <Image src="/logo-elysia.png" alt="Élysia Logo" width={130} height={40} />
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[#6f442e] font-medium">
          <Link href="/"><a className="hover:text-[#2d1d14]">Accueil</a></Link>
          <Link href="/inscription"><a className="hover:text-[#2d1d14]">Inscription</a></Link>
        </nav>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
          aria-label="Menu"
        >
          <span className={`absolute h-0.5 w-6 bg-[#6f442e] transition duration-300 ease-in-out ${menuOpen ? 'rotate-45 top-1.5' : 'top-0'}`} />
          <span className={`absolute h-0.5 w-6 bg-[#6f442e] transition duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'top-2'}`} />
          <span className={`absolute h-0.5 w-6 bg-[#6f442e] transition duration-300 ease-in-out ${menuOpen ? '-rotate-45 top-1.5' : 'top-4'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-[#efede8] z-40 shadow-xl px-6 py-8 md:hidden"
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
