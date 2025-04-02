export default function Contact() {
    return (
      <section style={{ maxWidth: '500px', margin: '60px auto', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>Contactez-nous</h1>
        <p style={{ marginBottom: '30px', fontSize: '1rem' }}>
          Une question, un besoin, une suggestion ? Nous sommes à votre écoute.
        </p>
  
        <form
          action="https://formspree.io/f/mvgkwkwv"
          method="POST"
          style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
        >
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            required
            style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cfc6b8' }}
          />
          <textarea
            name="message"
            placeholder="Votre message"
            rows="4"
            required
            style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cfc6b8' }}
          ></textarea>
          <button
            type="submit"
            style={{
              backgroundColor: '#6f442e',
              color: '#fff',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Envoyer
          </button>
        </form>
      </section>
    );
  }
  