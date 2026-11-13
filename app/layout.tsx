import type { Metadata, Viewport } from 'next';
import { Comfortaa, Urbanist } from 'next/font/google';
import ThemeProvider from '@/components/ThemeProvider';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/site';
import './globals.css';

const display = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

const sans = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.name,
  url: `${SITE.url}/`,
  jobTitle: 'Founder | Geospatial & Climate Intelligence Advisory',
  email: `mailto:${SITE.contact.email}`,
  sameAs: [SITE.contact.linkedin, SITE.contact.github],
  address: { '@type': 'PostalAddress', addressLocality: 'Florianopolis', addressCountry: 'BR' },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Moises Salgado | Textos, ideias e curiosidades',
    template: '%s | Moises Salgado',
  },
  description: SITE.description,
  alternates: { types: { 'application/rss+xml': '/rss.xml' } },
  manifest: '/site.webmanifest',
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }, { url: '/icon-192.png', type: 'image/png', sizes: '192x192' }],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    locale: 'pt_BR',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-default.png'] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen bg-white font-sans text-ink-700 dark:bg-ink-900 dark:text-paper-light">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
