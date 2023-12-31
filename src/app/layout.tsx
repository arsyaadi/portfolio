import './globals.css'
import type { Metadata } from 'next'
import Favicon from './favicon.ico'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Arsya Adi Setiawan",
  description: "Hi! I'm Arsya Adi Setiawan Putra, a Frontend Web Developer passionate about creating dynamic web applications. Proficient in Javascript, Typescript, React.JS, Vue.JS, HTML, and CSS. I thrive on exploring new technologies to expand my knowledge and bring professionalism to both team and individual projects.",
  keywords: ["Arsya Adi Setiawan", "Arsya", "Adi", "Setiawan", "Frontend", "Web", "Developer", "Frontend Web Developer", "Web Developer", "Frontend Developer", "Frontend Web Developer in Indonesia", "Frontend Web Developer"],
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
