export default function Contact() {
    return (
      <section style={{ maxWidth: '400px', margin: '50px auto' }}>
        <h1>Contactez-nous</h1>
        <form
          action="https://formspree.io/f/mvgkwkwv"
          method="POST"
          style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
        >
          <input type="email" name="email" placeholder="Votre email" required />
          <textarea name="message" placeholder="Votre message" rows="4" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </section>
    );
  }
  