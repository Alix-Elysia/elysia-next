import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-[#fdfaf6] shadow-md">
      <Link href="/">
        <Image
          src="/logo-elysia.png"
          alt="Logo Élysia"
          width={140}
          height={70}
          priority
        />
      </Link>
      <nav className="flex gap-6 text-[#221f20] font-medium">
        <Link href="/">Accueil</Link>
        <Link href="/a-propos">À propos</Link>
        <Link href="/sanctuaire">Sanctuaire</Link>
        <Link href="/inscription">Inscription</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
