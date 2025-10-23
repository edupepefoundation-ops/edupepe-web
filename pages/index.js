import Head from 'next/head'
export default function Home(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-gray-900">
      <Head>
        <title>Edupepe — From Meme to Meaning</title>
        <meta name="description" content="Edupepe: The meme token that builds schools." />
      </Head>

      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/logo.svg" alt="Edupepe Logo" className="w-12 h-12"/>
          <div className="font-semibold text-lg">Edupepe</div>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#tokenomics" className="hover:underline">Tokenomics</a>
          <a href="#charity" className="hover:underline">Charity</a>
          <a href="#roadmap" className="hover:underline">Roadmap</a>
          <a href="#faq" className="hover:underline">FAQ</a>
          <a href="https://t.me/+tt2j1dbPwvZjNjA1" className="px-4 py-2 bg-emerald-500 text-white rounded-md">Join Telegram</a>
        </nav>
      </header>

      <main className="px-6">
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Edupepe — The Meme Token That Builds Schools</h1>
            <p className="mt-4 text-gray-700 text-lg">Join a movement where every meme matters. Every transaction helps children in orphanages and underprivileged areas get access to proper education.</p>
            <div className="mt-6 flex gap-4">
              <a href="#presale" className="px-5 py-3 bg-emerald-500 text-white rounded-lg">Join Presale</a>
              <a href="/whitepaper.pdf" className="px-5 py-3 bg-white border border-gray-200 rounded-lg">Read Whitepaper</a>
            </div>
            <div className="mt-6 flex gap-4 items-center">
              <img src="/images/pepe-hero.svg" alt="Edupepe Hero" className="w-32 h-32"/>
              <div>
                <div className="text-sm text-gray-600">Total Supply: <strong>100,000,000,000 EDUPEPE</strong></div>
                <div className="text-sm text-gray-500 mt-2">Charity: 20% • Presale: 40% • Community: 15%</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-6">
            <img src="/images/hero.svg" alt="Hero" className="w-full max-w-sm rounded-2xl shadow-lg" />
          </div>
        </section>

        <section id="about" className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-semibold">About Edupepe</h2>
            <p className="mt-4 text-gray-700 max-w-3xl">Edupepe was born from a simple dream — to turn the energy of meme culture into real, tangible impact for children who lack access to education.</p>
          </div>
        </section>

        <section id="charity" className="py-12">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl font-semibold">Charity Mechanism</h2>
              <p className="mt-4 text-gray-700">20% of supply goes to Charity Fund. All disbursements are published and auditable.</p>
            </div>
            <div className="flex gap-4">
              <img src="/images/school.svg" alt="School" className="w-40 h-40 rounded-lg shadow"/>
              <img src="/images/learning.svg" alt="Learning" className="w-40 h-40 rounded-lg shadow"/>
            </div>
          </div>
        </section>

        <footer className="py-8 text-center text-sm text-gray-600 border-t mt-8">© 2025 Edupepe Foundation</footer>
      </main>
    </div>
  )
}
