import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-[#efede8] py-4 shadow-sm sticky top-0 z-50">
      <div className="flex flex-col items-center">
        <Link href="/">
          <a className="mb-2 opacity-90 hover:opacity-100 transition-opacity duration-200">
            <Image
              src="/logo-elysia.png"
              alt="Logo Elysia"
              width={140}
              height={50}
              priority
            />
          </a>
        </Link>

        <nav>
          <ul className="flex space-x-5 text-sm font-light tracking-wide text-[#6f442e] uppercase">
            <li><Link href="/"><a className="hover:underline hover:underline-offset-4">Accueil</a></Link></li>
            <li><Link href="/a-propos"><a className="hover:underline hover:underline-offset-4">À propos</a></Link></li>
            <li><Link href="/sanctuaire"><a className="hover:underline hover:underline-offset-4">Sanctuaire</a></Link></li>
            <li><Link href="/gardien"><a className="hover:underline hover:underline-offset-4">IA Le Gardien</a></Link></li>
            <li><Link href="/inscription"><a className="hover:underline hover:underline-offset-4">Inscription</a></Link></li>
            <li><Link href="/contact"><a className="hover:underline hover:underline-offset-4">Contact</a></Link></li>
            <li><Link href="/login"><a className="hover:underline hover:underline-offset-4">Connexion</a></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
