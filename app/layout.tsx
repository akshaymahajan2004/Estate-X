import type { Metadata } from 'next';
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { FavoritesProvider } from '@/lib/favorites-context';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EstateX | Ultra-Luxury Architecture & Private Real Estate Estates',
  description: 'Discover curated oceanfront villas, skyline penthouses, and architectural masterworks across London, Dubai, Mumbai, and world capitals.',
  keywords: ['luxury real estate', 'architectural villas', 'penthouses', 'EstateX', 'ultra high net worth properties'],
  authors: [{ name: 'EstateX Luxury Advisory' }],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/apple-icon.svg',
  },
  openGraph: {
    title: 'EstateX | Luxury Real Estate & Architectural Masterpieces',
    description: 'Find a place worth calling home. Curated global property discovery.',
    url: 'https://estatex.luxury',
    siteName: 'EstateX',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'EstateX Oceanfront Luxury Villa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EstateX Luxury Real Estate',
    description: 'Curated architectural villas & skyline penthouses.',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cormorant.variable} dark scroll-smooth`}>
      <body className="bg-background text-primary antialiased min-h-screen flex flex-col justify-between">
        <FavoritesProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  );
}
