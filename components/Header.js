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
    // On fait apparaître le logo en fade-in une fois que la page a scrollé de 30px
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setLogoVisible(true);
      } else {
        setLogoVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#efede8]/80 backdrop-blur-md border-b border-[#bca895] shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo avec animation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={logoVisible ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 0 }}
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

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-10 text-[#6f442e] text-sm font-medium tracking-wide">
          <Link href="/"><a className="hover:text-[#2d1d14]">Accueil</a></Link>
          <Link href="/inscription"><a className="hover:text-[#2d1d14]">Inscription</a></Link>
        </nav>

        {/* Hamburger icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden w-8 h-8 relative focus:outline-none"
          aria-label="Ouvrir le menu"
        >
          <span className={`absolute h-0.5 w-6 bg-[#6f442e] transition duration-300 ease-in-out ${menuOpen ? 'rotate-45 top-3' : 'top-1'}`} />
          <span className={`absolute h-0.5 w-6 bg-[#6f442e] transition duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'top-3'}`} />
          <span className={`absolute h-0.5 w-6 bg-[#6f442e] transition duration-300 ease-in-out ${menuOpen ? '-rotate-45 top-3' : 'top-5'}`} />
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 right-0 w-3/4 max-w-xs h-screen bg-[#efede8] z-40 shadow-xl px-8 py-10 flex flex-col"
          >
            <ul className="space-y-6 text-[#6f442e] font-medium text-lg">
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
