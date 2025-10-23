import Head from 'next/head'
import fs from 'fs'
import path from 'path'

export default function Whitepaper({ content }){
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Edupepe — Whitepaper v1.0</title>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-serif font-bold text-teal-700">Edupepe Whitepaper v1.0 (English)</h1>
        <div className="mt-6 text-gray-800 whitespace-pre-line">{content}</div>
        <div className="mt-8">
          <a href="/docs/edupepe_whitepaper_v1_en.pdf" className="px-4 py-2 bg-emerald-600 text-white rounded-md">Download PDF</a>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps(){
  const filePath = path.join(process.cwd(), 'public', 'docs', 'edupepe_whitepaper_v1_en.txt')
  const content = fs.readFileSync(filePath, 'utf8')
  return { props: { content } }
}