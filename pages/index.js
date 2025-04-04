import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-[#f5f1e8] text-[#6f442e]">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-gradient-to-b from-[#efede8] to-[#f5f1e8]">
        <Image src="/logo-elysia.png" alt="Logo Élysia" width={160} height={50} className="mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenue sur <span className="text-[#4c2e1a]">Élysia</span></h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          Offrez à vos souvenirs un sanctuaire éternel. Avec Élysia, préservez les moments qui comptent pour toujours.
        </p>
        <Link href="/inscription">
          <a className="bg-[#6f442e] text-white px-6 py-3 rounded-xl text-lg shadow-md hover:bg-[#5a3524] transition">
            Créer mon espace
          </a>
        </Link>
      </section>

      {/* LE GARDIEN DES MEMOIRES */}
      <section className="text-center py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Le Gardien des Mémoires</h2>
        <p className="max-w-xl mx-auto text-lg mb-6">
          Il vous guide pour raconter votre histoire. Chaque souvenir devient un trésor préservé pour vos proches.
        </p>
        <Link href="/gardien">
          <a className="bg-[#6f442e] text-white px-5 py-2 rounded-lg shadow hover:bg-[#5a3524] transition">
            Découvrir Le gardien des mémoires
          </a>
        </Link>
      </section>

      {/* COMMENT CA MARCHE */}
      <section className="bg-[#e8e2d9] py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">Comment ça marche ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-2">1. Créez votre espace</h3>
            <p>Inscrivez-vous en quelques secondes pour ouvrir votre sanctuaire personnel.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">2. Partagez vos souvenirs</h3>
            <p>Ajoutez des textes, des photos, des vidéos... ou laissez le gardien des mémoires vous guider.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">3. Transmettez</h3>
            <p>Votre histoire demeure éternelle pour les générations futures.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
