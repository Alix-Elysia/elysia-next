import Link from 'next/link';
import { FaInstagram, FaTwitter, FaLinkedin, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#6f442e] text-[#efede8] px-6 py-8 mt-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-6 text-center">

        {/* Liens légaux */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm tracking-wide">
          <Link href="/mentions-legales"><a className="hover:underline hover:text-white transition">Mentions Légales</a></Link>
          <Link href="/cgv"><a className="hover:underline hover:text-white transition">CGV</a></Link>
          <Link href="/politique-de-confidentialite"><a className="hover:underline hover:text-white transition">Confidentialité</a></Link>
        </nav>

        {/* Réseaux sociaux */}
        <div className="flex justify-center items-center space-x-5">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaLinkedin size={22} />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaTiktok size={22} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaInstagram size={22} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaTwitter size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs tracking-wide opacity-80">© 2025 ÉLYSIA · Tous droits réservés.</p>
      </div>
    </footer>
  );
}
