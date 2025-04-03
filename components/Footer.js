import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#6f442e', color: '#efede8', padding: '20px 0', textAlign: 'center' }}>
      <div>
        <p>© 2025 ÉLYSIA</p>
      </div>
      <div style={{ marginTop: '10px' }}>
        <Link href="/mentions-legales">
          <a style={{ color: '#efede8', margin: '0 10px' }}>Mentions Légales</a>
        </Link>
        <Link href="/cgv">
          <a style={{ color: '#efede8', margin: '0 10px' }}>CGV</a>
        </Link>
        <Link href="/politique-de-confidentialite">
          <a style={{ color: '#efede8', margin: '0 10px' }}>Politique de Confidentialité</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
