import { useEffect, useState } from 'react';
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#efede8]/90 shadow-md backdrop-blur-md border-b border-[#d9c7b8]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" onClick={closeMenu}>
            <a className="flex items-center">
              <Image src="/logo-elysia.png" alt="Élysia Logo" width={120} height={40} />
            </a>
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-[#6f442e] font-medium text-sm">
          <Link href="/"><a className="hover:text-[#2d1d14] transition">Accueil</a></Link>
          <Link href="/inscription"><a className="hover:text-[#2d1d14] transition">Inscription</a></Link>
        </nav>

        {/* Mobile burger */}
        <button onClick={toggleMenu} className="md:hidden w-8 h-8 relative focus:outline-none" aria-label="Menu">
          <span className={`absolute h-0.5 w-6 bg-[#6f442e] transition transform ${menuOpen ? 'rotate-45 top-3' : 'top-1'}`} />
          <span className={`absolute h-0.5 w-6 bg-[#6f442e] transition-all ${menuOpen ? 'opacity-0' : 'top-3'}`} />
          <span className={`absolute h-0.5 w-6 bg-[#6f442e] transition transform ${menuOpen ? '-rotate-45 top-3' : 'top-5'}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 right-0 w-4/5 max-w-sm h-screen bg-[#efede8] z-40 shadow-xl px-8 py-14"
          >
            <ul className="flex flex-col gap-6 text-[#6f442e] font-medium text-lg">
              <li><Link href="/"><a className="text-pink-600 text-xl">🏠 Accueil TEST</a></Link>
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