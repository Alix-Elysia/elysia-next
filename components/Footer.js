import Link from 'next/link';
import CookieConsent from 'react-cookie-consent';

const Footer = () => {
  return (
    <>
      {/* Bannière de consentement aux cookies */}
      <CookieConsent
        location="bottom"
        buttonText="Accepter"
        cookieName="userConsent"
        style={{ background: "#6f442e", color: "white" }}
        buttonStyle={{ background: "#efede8", color: "#6f442e" }}
        expires={150}
      >
        Ce site utilise des cookies pour améliorer votre expérience. En poursuivant votre navigation, vous acceptez l'utilisation des cookies.{" "}
        <a href="/politique-des-cookies" style={{ color: "#efede8" }}>En savoir plus</a>
      </CookieConsent>

      {/* Footer principal */}
      <footer style={{ backgroundColor: '#f5f1e8', padding: '20px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '10px' }}>
            <Link href="/legal/mentions-legales" passHref>
              <a style={{ margin: '0 15px', color: '#6f442e', textDecoration: 'none' }}>Mentions Légales</a>
            </Link>
            <Link href="/legal/cgv" passHref>
              <a style={{ margin: '0 15px', color: '#6f442e', textDecoration: 'none' }}>CGV</a>
            </Link>
            <Link href="/legal/politique-de-confidentialite" passHref>
              <a style={{ margin: '0 15px', color: '#6f442e', textDecoration: 'none' }}>Politique de Confidentialité</a>
            </Link>
          </div>

          <div style={{ marginBottom: '10px' }}>
            <p style={{ color: '#6f442e', fontSize: '14px' }}>
              © 2023 ÉLYSIA. Tous droits réservés.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="https://www.instagram.com" passHref>
              <a style={{ margin: '0 10px', color: '#6f442e', textDecoration: 'none' }}>Instagram</a>
            </Link>
            <Link href="https://www.facebook.com" passHref>
              <a style={{ margin: '0 10px', color: '#6f442e', textDecoration: 'none' }}>Facebook</a>
            </Link>
            <Link href="https://www.twitter.com" passHref>
              <a style={{ margin: '0 10px', color: '#6f442e', textDecoration: 'none' }}>Twitter</a>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
