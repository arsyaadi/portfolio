import './globals.css'
import type { Metadata } from 'next'
import Favicon from './favicon.ico'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arsya Adi Setiawan',
  description: 'A Frontend Web Developer who has a high enthusiasm for web application development. Has main capabilities such as Javascript, Typescript, React.JS, Vue.Js, HTML, and CSS  Interested in exploring new things to increase knowledge, have good adaptability, and are able to work professionally both as a team and individually.',
  keywords: 'Arsya Adi Setiawan, Arsya, Adi, Setiawan, Frontend, Web, Developer, Frontend Web Developer, Web Developer, Frontend Developer, Frontend Web Developer in Indonesia, Frontend Web Developer',
  icons: [{ rel: 'icon', href: Favicon.src, url: Favicon.src}],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
