import Head from 'next/head'
export default function Home(){
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Edupepe — Turning Memes Into Education</title>
        <meta name="description" content="Edupepe is a meme-based charity token dedicated to funding education for underprivileged children." />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <header className="border-b py-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/images/logo_pro.png" alt="Edupepe Logo" className="w-14 h-14 rounded-md shadow-sm"/>
            <div>
              <div className="font-serif text-xl text-emerald-700 font-bold">Edupepe</div>
              <div className="text-sm text-gray-500">From Memes to Education</div>
            </div>
          </div>

          <nav className="flex items-center gap-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#tokenomics" className="hover:underline">Tokenomics</a>
            <a href="#roadmap" className="hover:underline">Roadmap</a>
            <a href="#charity" className="hover:underline">Charity</a>
            <a href="/whitepaper" className="hover:underline">Whitepaper</a>
            <a href="https://t.me/+tt2j1dbPwvZjNjA1" className="px-4 py-2 bg-emerald-600 text-white rounded-md">Join The Movement</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center py-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-teal-700 leading-tight">Turning Memes Into Education</h1>
            <p className="mt-6 text-lg text-gray-700">Edupepe is a community-driven meme token with a clear mission: fund real education projects in underprivileged areas. We combine meme culture's energy with transparent charitable action.</p>
            <div className="mt-8 flex gap-4">
              <a href="https://t.me/+tt2j1dbPwvZjNjA1" className="px-6 py-3 bg-emerald-600 text-white rounded-md font-semibold">Join The Movement</a>
              <a href="/docs/edupepe_whitepaper_v1_en.pdf" className="px-6 py-3 border border-emerald-600 text-emerald-600 rounded-md font-semibold">Download Whitepaper</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              <div className="p-4 bg-gray-50 rounded-md text-center">
                <div className="text-sm text-gray-500">Total Supply</div>
                <div className="font-semibold">100,000,000,000</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-md text-center">
                <div className="text-sm text-gray-500">Charity Fund</div>
                <div className="font-semibold">25%</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-md text-center">
                <div className="text-sm text-gray-500">Public Sale</div>
                <div className="font-semibold">40%</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img src="/images/hero.webp" alt="Edupepe Hero" className="w-full rounded-2xl shadow-xl" />
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-12">
          <div className="bg-gradient-to-r from-emerald-50 to-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-teal-700">About Edupepe</h2>
            <p className="mt-4 text-gray-700">Edupepe turns meme culture's playful energy into a sustained charity movement for education. Started in Indonesia, Edupepe funds school builds, supplies, and educational programs for children in need, with transparent reporting and community participation.</p>
            <ul className="mt-4 list-disc pl-6 text-gray-700">
              <li>Transparent charity wallet with on-chain proof</li>
              <li>Community voting for project priorities</li>
              <li>Regular impact reports with photos and receipts</li>
            </ul>
          </div>
        </section>

        {/* Tokenomics */}
        <section id="tokenomics" className="py-12">
          <h2 className="text-2xl font-serif font-bold text-teal-700">Tokenomics</h2>
          <div className="mt-6 md:flex md:gap-8 items-start">
            <div className="md:w-1/2">
              <p className="text-gray-700">Total Supply: <strong>100,000,000,000 EDUPEPE</strong></p>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between"><div>Public Sale</div><div>40,000,000,000 (40%)</div></div>
                <div className="flex justify-between"><div>Charity & Education Fund</div><div>25,000,000,000 (25%)</div></div>
                <div className="flex justify-between"><div>Liquidity Pool</div><div>15,000,000,000 (15%)</div></div>
                <div className="flex justify-between"><div>Marketing & Partnerships</div><div>10,000,000,000 (10%)</div></div>
                <div className="flex justify-between"><div>Team & Development</div><div>10,000,000,000 (10%)</div></div>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <svg viewBox="0 0 32 32" className="w-48 h-48">
                {/* pie slices */}
                <circle r="16" cx="16" cy="16" fill="#F3F4F6"></circle>
                <path d="M16 16 L32 16 A16 16 0 0 1 8.4721 30.4721 Z" fill="#34D399" />
                <path d="M16 16 L8.4721 30.4721 A16 16 0 0 1 2.6668 12.6668 Z" fill="#FACC15" />
                <path d="M16 16 L2.6668 12.6668 A16 16 0 0 1 13.4721 2.5279 Z" fill="#60A5FA" />
                <path d="M16 16 L13.4721 2.5279 A16 16 0 0 1 27.2 6.4 Z" fill="#F59E0B" />
                <path d="M16 16 L27.2 6.4 A16 16 0 0 1 32 16 Z" fill="#9CA3AF" />
              </svg>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="py-12">
          <h2 className="text-2xl font-serif font-bold text-teal-700">Roadmap</h2>
          <ol className="mt-4 space-y-4 text-gray-700">
            <li><strong>Phase 1 — Launch:</strong> Website, Whitepaper v1.0, Presale, Charity pilot in Medan.</li>
            <li><strong>Phase 2 — Growth:</strong> DEX listing, first school renovation, marketing push.</li>
            <li><strong>Phase 3 — Expansion:</strong> Partnerships with NGOs, DAO governance, global outreach.</li>
          </ol>
        </section>

        {/* Charity */}
        <section id="charity" className="py-12 bg-emerald-50 rounded-xl p-6">
          <h2 className="text-2xl font-serif font-bold text-teal-700">Charity</h2>
          <p className="mt-4 text-gray-700">Edupepe allocates a dedicated fund to education projects. Community proposals are voted and selected for support. All spending is public and audited.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <img src="/images/charity.webp" alt="charity" className="w-full h-40 object-cover rounded"/>
              <h3 className="mt-3 font-semibold">School Renovation</h3>
              <p className="text-sm text-gray-600">Repair and equip classrooms for underserved communities.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <img src="/images/school.webp" alt="school" className="w-full h-40 object-cover rounded"/>
              <h3 className="mt-3 font-semibold">Supplies & Scholarships</h3>
              <p className="text-sm text-gray-600">Provide books, uniforms, and scholarships for children in need.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <img src="/images/learning.webp" alt="learning" className="w-full h-40 object-cover rounded"/>
              <h3 className="mt-3 font-semibold">Community Programs</h3>
              <p className="text-sm text-gray-600">After-school programs, teacher training, and community workshops.</p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-12">
          <h2 className="text-2xl font-serif font-bold text-teal-700">Team</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
              <img src="/images/founder.webp" alt="Founder" className="w-20 h-20 rounded-full object-cover"/>
              <div>
                <div className="font-semibold">Sandy Meliala</div>
                <div className="text-sm text-gray-600">Founder — Visionary Leader</div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
              <img src="/images/dev.webp" alt="Developer" className="w-20 h-20 rounded-full object-cover"/>
              <div>
                <div className="font-semibold">Edupepe Dev Team</div>
                <div className="text-sm text-gray-600">Developer — Smart Contract & Web</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t mt-12">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/images/logo_pro.png" alt="logo" className="w-12 h-12 rounded-md"/>
              <div>
                <div className="font-semibold">Edupepe Foundation</div>
                <div className="text-sm text-gray-500">Turning Memes into Education</div>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1BUomif5Qz/" className="text-sm text-gray-600 hover:underline">Facebook</a>
              <a href="https://x.com/Edupepe_" className="text-sm text-gray-600 hover:underline">X</a>
              <a href="https://www.instagram.com/edupepe_/" className="text-sm text-gray-600 hover:underline">Instagram</a>
              <a href="https://t.me/+tt2j1dbPwvZjNjA1" className="text-sm text-gray-600 hover:underline">Telegram</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}