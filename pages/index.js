import Head from 'next/head'
import { motion } from 'framer-motion'
import Image from 'next/image'

const totalSupply = 100_000_000_000

const tokenomics = [
  { name: 'Presale', amount: 40_000_000_000, colorHex: '#34d399' },
  { name: 'Charity', amount: 20_000_000_000, colorHex: '#fef08a' },
  { name: 'Community', amount: 15_000_000_000, colorHex: '#7dd3fc' },
  { name: 'Development', amount: 10_000_000_000, colorHex: '#9ca3af' },
  { name: 'Marketing', amount: 10_000_000_000, colorHex: '#fdba74' },
  { name: 'Team', amount: 5_000_000_000, colorHex: '#71717a' },
]

function format(n){ return n.toLocaleString('en-US') }

export default function Home(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-gray-900">
      <Head>
        <title>Edupepe — From Meme to Meaning</title>
        <meta name="description" content="Edupepe: The meme token that builds schools. Every transaction helps children in orphanages and underprivileged areas get access to proper education." />
      </Head>

      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-emerald-400 flex items-center justify-center text-white font-bold">EP</div>
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
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <motion.h1 initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} className="text-4xl md:text-5xl font-extrabold leading-tight">
              Edupepe — The Meme Token That Builds Schools
            </motion.h1>
            <p className="mt-4 text-gray-700 text-lg">
              Join a movement where every meme matters. Every transaction helps children in orphanages and underprivileged areas get access to proper education.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#presale" className="px-5 py-3 bg-emerald-500 text-white rounded-lg shadow">Join Presale</a>
              <a href="/whitepaper.pdf" className="px-5 py-3 bg-white border border-gray-200 rounded-lg">Read Whitepaper</a>
            </div>

            <div className="mt-6">
              <div className="text-sm text-gray-600">Total Supply: <strong>{format(totalSupply)} EDUPEPE</strong></div>
              <div className="mt-4 grid grid-cols-3 gap-2 max-w-sm">
                {tokenomics.map(t=> (
                  <div key={t.name} className="flex items-center gap-3">
                    <div style={{background: t.colorHex}} className="w-3 h-3 rounded-full" />
                    <div className="text-sm">
                      <div className="font-medium">{t.name}</div>
                      <div className="text-xs text-gray-500">{format(t.amount)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center p-6">
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-emerald-100 to-yellow-50 shadow-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl">🐸</div>
                <div className="mt-3 font-semibold">Edupepe</div>
                <div className="text-sm text-gray-500">Turning Laughter into Learning</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-semibold">About Edupepe</h2>
            <p className="mt-4 text-gray-700 max-w-3xl">Edupepe was born from a simple dream — to turn the energy of meme culture into real, tangible impact for children who lack access to education. While most meme coins chase hype and speculation, Edupepe focuses on humanity and hope. Every token purchased, every transaction made, contributes to improving schools, supporting orphanages, and empowering children to dream again.</p>

            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Mission</h3>
                <p className="text-sm text-gray-600 mt-2">Build and repair schools in underdeveloped areas, support orphanages, and empower communities through transparency and technology.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Vision</h3>
                <p className="text-sm text-gray-600 mt-2">A world where meme culture funds education — one laugh at a time.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">How We Work</h3>
                <p className="text-sm text-gray-600 mt-2">A portion of supply is dedicated for charity and will be used transparently. Community votes decide outreach priorities and projects.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="tokenomics" className="py-12">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold">Tokenomics</h2>
              <p className="mt-3 text-gray-700">Total Supply: <strong>{format(totalSupply)} EDUPEPE</strong></p>

              <div className="mt-6 space-y-3">
                {tokenomics.map((t) => {
                  const percent = (t.amount / totalSupply) * 100
                  return (
                    <div key={t.name}>
                      <div className="flex justify-between text-sm">
                        <div className="font-medium">{t.name}</div>
                        <div className="text-gray-600">{format(t.amount)} ({percent.toFixed(1)}%)</div>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full mt-2 overflow-hidden">
                        <div style={{ width: `${percent}%`, background: t.colorHex }} className="h-2 rounded-full" />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Distribution Pie (visual)</h3>
              <div className="mt-4 w-full flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-48 h-48">
                  {(() => {
                    const arcs = []
                    let start = 0
                    const vals = tokenomics.map(t=> t.amount / totalSupply)
                    vals.forEach((v, i) => {
                      const end = start + v
                      const startX = 16 + 16 * Math.cos(2 * Math.PI * start)
                      const startY = 16 + 16 * Math.sin(2 * Math.PI * start)
                      const endX = 16 + 16 * Math.cos(2 * Math.PI * end)
                      const endY = 16 + 16 * Math.sin(2 * Math.PI * end)
                      const large = v > 0.5 ? 1 : 0
                      const d = `M16 16 L ${startX} ${startY} A 16 16 0 ${large} 1 ${endX} ${endY} Z`
                      arcs.push({ d, i })
                      start = end
                    })
                    return arcs.map((a) => (
                      <path key={a.i} d={a.d} fill={[ '#34d399', '#fef08a', '#7dd3fc', '#9ca3af', '#fdba74', '#71717a' ][a.i]} stroke="white" strokeWidth="0.2" />
                    ))
                  })()}
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section id="charity" className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-semibold">Charity Mechanism</h2>
            <p className="mt-4 text-gray-700 max-w-3xl">20% of total supply ({format(20_000_000_000)} EDUPEPE) is reserved for the Charity Fund. Funds will be used to build and repair schools, purchase supplies, and support orphanages. All charity disbursements are recorded and will be published on-chain and on our official channels.</p>

            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Transparency</h4>
                <p className="text-sm text-gray-600 mt-2">All transfers from the charity wallet are public and auditable.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Community Voting</h4>
                <p className="text-sm text-gray-600 mt-2">Community helps decide which projects receive funding.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Impact Reports</h4>
                <p className="text-sm text-gray-600 mt-2">Regular reports with evidence (photos, receipts) published on our channels.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="roadmap" className="py-12">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-semibold">Roadmap</h2>
            <ol className="mt-6 space-y-4">
              <li><div className="font-medium">Phase 1 — Q4 2025</div><div className="text-sm text-gray-600">Token launch, website live, first charity pilot in Medan.</div></li>
              <li><div className="font-medium">Phase 2 — Q1 2026</div><div className="text-sm text-gray-600">Listing on DEX, marketing expansion, first school renovation.</div></li>
              <li><div className="font-medium">Phase 3 — Q2 2026</div><div className="text-sm text-gray-600">Partnerships with NGOs, NFT collection for education fund.</div></li>
              <li><div className="font-medium">Phase 4 — Q3 2026</div><div className="text-sm text-gray-600">Global charity expansion, audited transparency reports.</div></li>
            </ol>
          </div>
        </section>

        <section id="faq" className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-semibold">FAQ</h2>
            <div className="mt-6 space-y-4">
              <details className="p-4 border rounded-lg"><summary className="font-medium">What is Edupepe?</summary><p className="mt-2 text-sm text-gray-600">Edupepe is a meme-based charity token focused on funding education and orphanages.</p></details>
              <details className="p-4 border rounded-lg"><summary className="font-medium">How do I buy EDUPEPE?</summary><p className="mt-2 text-sm text-gray-600">You can participate in our presale or buy directly once listed on supported DEXs. Follow our channels for updates.</p></details>
              <details className="p-4 border rounded-lg"><summary className="font-medium">Is the charity fund transparent?</summary><p className="mt-2 text-sm text-gray-600">Yes. All charity transactions will be public and verifiable on-chain. Periodic reports will be shared by the team.</p></details>
            </div>
          </div>
        </section>

        <footer className="py-8 border-t mt-8">
          <div className="max-w-6xl mx-auto px-6 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>© {new Date().getFullYear()} Edupepe Foundation. All rights reserved.</div>
            <div className="flex gap-3">
              <a href="https://x.com/Edupepe_" className="hover:underline">X / Twitter</a>
              <a href="https://www.instagram.com/edupepe_/" className="hover:underline">Instagram</a>
              <a href="https://t.me/+tt2j1dbPwvZjNjA1" className="hover:underline">Telegram</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
