import Link from 'next/link';
import Header from '../components/Header';  // Importation du Header
import Footer from '../components/Footer';  // Importation du Footer

export default function Home() {
  return (
    <div className="min-h-screen bg-[#efede8]"> {/* Fond ivoire */}
      <Header />
      <section style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#6f442e' }}>Bienvenue sur Élysia</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', marginBottom: '40px', color: '#6f442e' }}>
          Offrez à vos souvenirs un sanctuaire numérique. Avec Élysia, préservez les moments qui comptent pour toujours.
        </p>
        <Link href="/inscription">
          <button style={{ backgroundColor: '#6f442e', color: '#fff', padding: '12px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
            Créer mon espace
          </button>
        </Link>
      </section>
      <Footer />
    </div>
  );
}
