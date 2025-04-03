import { getCsrfToken, signIn } from 'next-auth/react';
import { useState } from 'react';

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}

export default function Login({ csrfToken }) {
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result.error) {
      setError(result.error);
    } else {
      // Redirige vers la page d'accueil, par exemple
      window.location.href = '/';
    }
  };

  return (
    <section style={{ maxWidth: '400px', margin: '60px auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Se connecter</h1>

      {error && (
        <div style={{ color: 'red', marginBottom: '10px' }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          required
          style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cfc6b8' }}
        />
        <input
          type="password"
          name="password"
          placeholder="Votre mot de passe"
          required
          style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cfc6b8' }}
        />
        <button
          type="submit"
          style={{ backgroundColor: '#6f442e', color: '#fff', padding: '12px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
        >
          Se connecter
        </button>
      </form>
    </section>
  );
}
