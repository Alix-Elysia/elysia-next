import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function APropos() {
  return (
    <div>
      <Header />
      <section
        style={{
          backgroundColor: '#efede8',
          color: '#6f442e',
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '60px 20px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 'bold' }}>
          À propos d’Élysia
        </h1>
        <p style={{ maxWidth: '800px', fontSize: '1.2rem', marginBottom: '40px', lineHeight: '1.6' }}>
          Élysia est une plateforme conçue pour préserver la mémoire de chacun
          dans un sanctuaire numérique. Nous croyons
          que chaque souvenir, chaque histoire, mérite d'être transmis
          aux générations futures.
        </p>
        <p style={{ maxWidth: '800px', fontSize: '1.1rem', marginBottom: '40px', lineHeight: '1.6' }}>
          Notre équipe s’engage à offrir un espace chaleureux et accessible
          où vous pourrez sauvegarder vos moments précieux, échanger avec vos
          proches, et construire un véritable héritage immatériel.
          En alliant technologie et humanité, Élysia souhaite rendre
          l’hommage numérique plus simple, plus beau et surtout plus humain.
        </p>
      </section>
      <Footer />
    </div>
  );
}
