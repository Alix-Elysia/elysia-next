export default function Inscription() {
    return (
      <section style={{ maxWidth: '400px', margin: '50px auto' }}>
        <h1>Créer mon espace</h1>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input type="text" placeholder="Nom" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Mot de passe" required />
          <button type="submit">Créer mon compte</button>
        </form>
      </section>
    );
  }
  