import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setLogoVisible(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${logoVisible ? 'bg-[#efede8]/90 backdrop-blur-md shadow-sm border-b border-[#d6cfc4]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:py-5">
        
        {/* Logo centré verticalement */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Link href="/" onClick={closeMenu}>
            <a className="flex items-center">
              <Image
                src="/logo-elysia.png"
                alt="Élysia Logo"
                width={130}
                height={40}
                className="object-contain"
              />
            </a>
          </Link>
        </motion.div>

        {/* Menu desktop : espacements retravaillés */}
        <nav className="hidden md:flex items-center gap-12 text-[#6f442e] font-medium text-sm tracking-wide">
          <Link href="/"><a className="hover:text-[#2d1d14] transition-all">Accueil</a></Link>
          <Link href="/inscription"><a className="hover:text-[#2d1d14] transition-all">Inscription</a></Link>
        </nav>

        {/* Hamburger icon avec animation clean */}
        <button
          onClick={toggleMenu}
          className="md:hidden w-8 h-8 relative focus:outline-none"
          aria-label="Ouvrir le menu"
        >
          <span className={`absolute h-0.5 w-6 bg-[#6f442e] transition duration-300 ${menuOpen ? 'rotate-45 top-3' : 'top-1'}`} />
          <span className={`absolute h-0.5 w-6 bg-[#6f442e] transition duration-300 ${menuOpen ? 'opacity-0' : 'top-3'}`} />
          <span className={`absolute h-0.5 w-6 bg-[#6f442e] transition duration-300 ${menuOpen ? '-rotate-45 top-3' : 'top-5'}`} />
        </button>
      </div>

      {/* Menu Mobile harmonieux */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 right-0 w-4/5 max-w-sm h-screen bg-[#efede8] z-40 shadow-xl px-8 py-16"
          >
            <ul className="flex flex-col gap-6 text-[#6f442e] font-medium text-lg leading-relaxed">
              <li><Link href="/" onClick={closeMenu}><a>🏠 Accueil</a></Link></li>
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
