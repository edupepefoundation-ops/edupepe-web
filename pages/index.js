import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4 text-emerald-400"
        >
          Edupepe — Turning Memes Into Meaning
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl text-lg text-gray-300"
        >
          The meme token with a mission: transforming laughter into learning.
          Every EDUPEPE transaction helps fund education and build schools for
          children in need — starting from Indonesia, expanding globally.
        </motion.p>
        <div className="mt-8 flex gap-4">
          <a
            href="#tokenomics"
            className="bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-3 rounded-full font-semibold"
          >
            Explore Tokenomics
          </a>
          <a
            href="/whitepaper.pdf"
            className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black px-6 py-3 rounded-full font-semibold"
          >
            Whitepaper
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-emerald-400">About Edupepe</h2>
        <p className="text-gray-300 leading-relaxed">
          Edupepe was created with a simple but powerful dream — to bring
          education and hope to underprivileged children through the power of
          blockchain. We merge humor and heart, meme culture and real impact.
        </p>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="py-20 bg-emerald-900/40 text-center">
        <h2 className="text-4xl font-bold mb-10 text-emerald-400">Tokenomics</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            ["Total Supply", "100,000,000,000 EDUPEPE"],
            ["Presale", "40,000,000,000"],
            ["Charity Wallet", "20,000,000,000"],
            ["Community Rewards", "15,000,000,000"],
            ["Development", "10,000,000,000"],
            ["Marketing", "10,000,000,000"],
            ["Team", "5,000,000,000"],
          ].map(([title, amount]) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              className="bg-emerald-800/60 p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-emerald-300">{title}</h3>
              <p className="text-gray-200">{amount}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-emerald-400">Roadmap</h2>
        <ul className="text-gray-300 space-y-4 text-left">
          <li>✅ Phase 1 — Concept, Whitepaper, Community Launch</li>
          <li>🚀 Phase 2 — Presale & Listing</li>
          <li>🏫 Phase 3 — First Charity Project: Building a School</li>
          <li>🌍 Phase 4 — Expansion to Other Regions</li>
          <li>💫 Phase 5 — Global Partnerships & DAO Launch</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-emerald-800/50 text-gray-400">
        <p>© 2025 Edupepe. All Rights Reserved.</p>
        <p className="text-sm">Made with ❤️ for the children of tomorrow.</p>
      </footer>
    </div>
  );
}
