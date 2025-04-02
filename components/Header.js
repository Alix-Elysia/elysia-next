import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '20px', background: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ color: '#221f20' }}>Élysia</h1>
      <nav>
        <Link href="/" style={{ margin: '0 10px' }}>Accueil</Link>
        <Link href="/a-propos" style={{ margin: '0 10px' }}>À propos</Link>
        <Link href="/sanctuaire" style={{ margin: '0 10px' }}>Sanctuaire</Link>
        <Link href="/inscription" style={{ margin: '0 10px' }}>Inscription</Link>
        <Link href="/contact" style={{ margin: '0 10px' }}>Contact</Link>
      </nav>
    </header>
  );
}
