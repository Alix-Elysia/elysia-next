import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#efede8]/80 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" onClick={closeMenu}>
          <a className="flex items-center">
            <Image src="/logo-elysia.png" alt="Élysia Logo" width={120} height={40} />
          </a>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/"><a className="text-[#6f442e] hover:underline">Accueil</a></Link>
          <Link href="/inscription"><a className="text-[#6f442e] hover:underline">Inscription</a></Link>
        </nav>

        {/* Menu Mobile - Hamburger avec animation */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="relative w-6 h-6 focus:outline-none"
            aria-label="Ouvrir le menu"
          >
            <span
              className={`absolute h-0.5 w-full bg-[#6f442e] transform transition duration-300 ${
                menuOpen ? 'rotate-45 top-2.5' : 'top-1'
              }`}
            />
            <span
              className={`absolute h-0.5 w-full bg-[#6f442e] transition-all duration-300 ${
                menuOpen ? 'opacity-0' : 'top-2.5'
              }`}
            />
            <span
              className={`absolute h-0.5 w-full bg-[#6f442e] transform transition duration-300 ${
                menuOpen ? '-rotate-45 top-2.5' : 'top-4'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#efede8]/95 backdrop-blur-md shadow-inner"
          >
            <ul className="flex flex-col items-center p-4 space-y-4 text-[#6f442e]">
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
