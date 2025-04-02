import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link href="/">
        <Image
          src="/logo-elysia.png"
          alt="Logo Élysia"
          width={140}
          height={70}
          priority
        />
      </Link>
      <nav style={{ display: 'flex', gap: '20px', fontWeight: '500' }}>
        <Link href="/">Accueil</Link>
        <Link href="/a-propos">À propos</Link>
        <Link href="/sanctuaire">Sanctuaire</Link>
        <Link href="/inscription">Inscription</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
