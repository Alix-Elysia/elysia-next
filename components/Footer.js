import Link from 'next/link';
import { FaInstagram, FaTwitter, FaLinkedin, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#6f442e] text-[#efede8] py-6 px-4 mt-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4 text-center">

        {/* Liens légaux */}
        <div className="flex flex-wrap justify-center space-x-6 text-sm font-light">
          <Link href="/mentions-legales"><a className="hover:underline">Mentions Légales</a></Link>
          <Link href="/cgv"><a className="hover:underline">CGV</a></Link>
          <Link href="/politique-de-confidentialite"><a className="hover:underline">Politique de Confidentialité</a></Link>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex space-x-6 mt-2">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaTiktok size={20} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaInstagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaTwitter size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs font-extralight mt-2">© 2025 ÉLYSIA. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
