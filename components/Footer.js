import Link from 'next/link';
import { FaInstagram, FaTwitter, FaLinkedin, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#6f442e] text-[#efede8] px-6 pt-12 pb-8 mt-32 border-t border-[#5a3924]">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-10">

        {/* Logo typographique */}
        <div className="text-2xl font-semibold tracking-widest uppercase text-[#efede8]">
          Élysia
        </div>

        {/* Ligne de séparation subtile */}
        <div className="h-px w-16 bg-[#efede8]/40" />

        {/* Navigation secondaire */}
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-light tracking-wide">
          <Link href="/mentions-legales">
            <a className="hover:underline hover:text-white transition">Mentions légales</a>
          </Link>
          <Link href="/cgv">
            <a className="hover:underline hover:text-white transition">CGV</a>
          </Link>
          <Link href="/politique-de-confidentialite">
            <a className="hover:underline hover:text-white transition">Confidentialité</a>
          </Link>
        </div>

        {/* Icônes sociales */}
        <div className="flex items-center justify-center space-x-6">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
            <FaLinkedin size={22} />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
            <FaTiktok size={22} />
          </a>
          <a href="https://www.instagram.com" target="_blank"
