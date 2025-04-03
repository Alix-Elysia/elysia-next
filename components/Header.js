import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#efede8', padding: '20px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <div>
          <Link href="/">
            <a>
              <Image src="/logo-elysia.png" alt="ÉLYSIA Logo" width={150} height={50} />
            </a>
          </Link>
        </div>
        <nav>
          <Link href="/a-propos">
            <a style={{ margin: '0 15px', color: '#6f442e' }}>À propos</a>
          </Link>
          <Link href="/sanctuaire">
            <a style={{ margin: '0 15px', color: '#6f442e' }}>Sanctuaire</a>
          </Link>
          <Link href="/contact">
            <a style={{ margin: '0 15px', color: '#6f442e' }}>Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
