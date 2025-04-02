import Link from 'next/link';

export default function Sanctuaire() {
  return (
    <section style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Votre Sanctuaire</h1>
      <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto', marginBottom: '40px' }}>
        Ici, chaque souvenir trouve sa place. Conservez les moments précieux pour qu’ils vivent éternellement.
      </p>
      <Link href="/inscription">
        <button style={{ backgroundColor: '#6f442e', color: '#fff', padding: '12px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
          Commencer mon sanctuaire
        </button>
      </Link>

      <div style={{ marginTop: '60px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ backgroundColor: '#d6cfc4', padding: '20px', borderRadius: '12px', width: '250px' }}>
          <h3>Photos</h3>
          <p style={{ fontSize: '0.9rem' }}>Ajoutez des images qui racontent votre histoire.</p>
        </div>
        <div style={{ backgroundColor: '#cfc6b8', padding: '20px', borderRadius: '12px', width: '250px' }}>
          <h3>Vidéos</h3>
          <p style={{ fontSize: '0.9rem' }}>Conservez vos souvenirs en vidéo pour les revivre à tout moment.</p>
        </div>
        <div style={{ backgroundColor: '#d6cfc4', padding: '20px', borderRadius: '12px', width: '250px' }}>
          <h3>Textes & Mémoires</h3>
          <p style={{ fontSize: '0.9rem' }}>Laissez des messages, anecdotes ou histoires qui comptent.</p>
        </div>
      </div>
    </section>
  );
}
