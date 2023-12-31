import "./globals.css";
import type { Metadata } from "next";
import Favicon from "./favicon.ico";
import { Inter } from "next/font/google";
import { config } from "./config";

const inter = Inter({ subsets: ["latin"] });

const { metaData } = config;

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
  keywords: metaData.keywords,
  icons: [{ rel: "icon", href: Favicon.src, url: Favicon.src }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: metaData.url,
    title: metaData.title,
    description: metaData.description,
    images: [
      {
        url: metaData.image,
        width: 1200,
        height: 630,
        alt: metaData.title,
      },
    ],
  },
  twitter: {  
    title: metaData.title,
    description: metaData.description,
    site: metaData.url,
    images: {
      url: metaData.image,
      alt: metaData.title,
    }
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
