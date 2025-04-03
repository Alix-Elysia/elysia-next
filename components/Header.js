import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-[#efede8] shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center">
            <Image src="/logo-elysia.png" alt="Élysia Logo" width={150} height={50} />
          </a>
        </Link>

        {/* Menu de navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/">
                <a className="text-[#6f442e] hover:text-[#221f20]">Accueil</a>
              </Link>
            </li>
            <li>
              <Link href="/a-propos">
                <a className="text-[#6f442e] hover:text-[#221f20]">À propos</a>
              </Link>
            </li>
            <li>
              <Link href="/sanctuaire">
                <a className="text-[#6f442e] hover:text-[#221f20]">Sanctuaire</a>
              </Link>
            </li>
            <li>
              <Link href="/inscription">
                <a className="text-[#6f442e] hover:text-[#221f20]">Inscription</a>
              </Link>
            </li>
            <li>
               <Link href="/gardien">
                  <a className="text-[#6f442e] hover:text-[#221f20]">Gardien IA</a>
               </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="text-[#6f442e] hover:text-[#221f20]">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
<li>
  <Link href="/login">
    <a className="text-[#6f442e] hover:text-[#221f20]">Se connecter</a>
  </Link>
</li>

