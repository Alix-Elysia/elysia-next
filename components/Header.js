import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '10px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#cfc6b8' }}>
      <Link href="/">
        <Image
          src="/logo-elysia.png"
          alt="Logo Élysia"
          width={120}
          height={120}
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
