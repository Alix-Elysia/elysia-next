import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#efede8]/80 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
        {/* Logo à gauche */}
        <Link href="/" onClick={closeMenu}>
          <a className="flex items-center">
            <Image src="/logo-elysia.png" alt="Logo Élysia" width={120} height={40} />
          </a>
        </Link>

        {/* Menu desktop visible uniquement sur md+ */}
        <nav className="hidden md:flex items-center space-x-8 text-[#6f442e] font-medium">
          <Link href="/"><a className="hover:text-[#221f20]">Accueil</a></Link>
          <Link href="/inscription"><a className="hover:text-[#221f20]">Inscription</a></Link>
        </nav>

        {/* Hamburger mobile visible uniquement sur sm- */}
        <button
          onClick={toggleMenu}
          className="md:hidden w-8 h-8 relative focus:outline-none"
          aria-label="Menu"
        >
          <span className={`block absolute h-0.5 w-full bg-[#6f442e] transform transition duration-300 ease-in-out ${menuOpen ? 'rotate-45 top-3.5' : 'top-2'}`} />
          <span className={`block absolute h-0.5 w-full bg-[#6f442e] transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'top-3.5'}`} />
          <span className={`block absolute h-0.5 w-full bg-[#6f442e] transform transition duration-300 ease-in-out ${menuOpen ? '-rotate-45 top-3.5' : 'top-5'}`} />
        </button>
      </div>

      {/* Menu Mobile animé */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 right-0 w-3/4 max-w-xs bg-[#efede8] text-[#6f442e] shadow-lg rounded-l-xl p-6 z-40 md:hidden"
          >
            <ul className="flex flex-col space-y-4 font-medium">
              <li><Link href="/" onClick={closeMenu}><a>Accueil</a></Link></li>
              <li><Link href="/a-propos" onClick={closeMenu}><a>À propos</a></Link></li>
              <li><Link href="/sanctuaire" onClick={closeMenu}><a>Sanctuaire</a></Link></li>
              <li><Link href="/gardien" onClick={closeMenu}><a>IA Le Gardien</a></Link></li>
              <li><Link href="/inscription" onClick={closeMenu}><a>Inscription</a></Link></li>
              <li><Link href="/contact" onClick={closeMenu}><a>Contact</a></Link></li>
              <li><Link href="/login" onClick={closeMenu}><a>Connexion</a></Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
