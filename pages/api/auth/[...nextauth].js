import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// Exemple de pseudo-base de données en mémoire (pour la démo)
// Plus tard, on remplacera par une vraie DB (PostgreSQL, etc.)
const users = [
  {
    id: '1',
    email: 'test@elysia.fr',
    password: 'secret', // en clair pour la démo, à ne jamais faire en prod
  },
];

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Identifiants',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Mot de passe', type: 'password' },
      },
      async authorize(credentials) {
        // Récupération de l'email et du mot de passe
        const { email, password } = credentials;

        // Vérification dans la pseudo-base
        const user = users.find(
          (u) => u.email === email && u.password === password
        );

        if (!user) {
          // Pas trouvé ou mauvais mot de passe
          throw new Error('Identifiants invalides');
        }

        // Renvoie l'objet user si tout est ok
        return {
          id: user.id,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Si l'utilisateur est défini, on l'ajoute au token
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // On récupère l'id stocké dans le token
      if (token && session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
});
