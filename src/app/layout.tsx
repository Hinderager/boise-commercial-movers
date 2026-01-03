import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Montserrat, Oswald } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import { QuoteFormProvider } from '@/context/QuoteFormContext'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700'],
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://boise-commercial-movers.com'),
  title: {
    default: 'Boise Commercial Movers | Office Relocation | Top Shelf',
    template: '%s | Boise Commercial Moving',
  },
  description: 'Professional commercial moving services in Boise, Meridian, Nampa, Caldwell & Eagle Idaho. Office relocation, warehouse moving, equipment transport. Licensed & insured. Minimal downtime. Call (208) 768-3987.',
  keywords: [
    'commercial movers Boise',
    'office movers Boise Idaho',
    'business relocation Meridian',
    'warehouse moving Nampa',
    'commercial moving company Boise',
    'office relocation Caldwell',
    'equipment movers Eagle Idaho',
    'IT relocation Treasure Valley',
    'commercial moving services',
    'office moving Boise',
    'business movers Idaho',
    'furniture installation Boise',
  ],
  authors: [{ name: 'Boise Commercial Movers' }],
  openGraph: {
    title: 'Commercial Movers | Boise, Meridian, Nampa Idaho',
    description: 'Professional office and business moving services in the Treasure Valley. Licensed, insured, and focused on minimal downtime.',
    url: 'https://boise-commercial-movers.com',
    siteName: 'Boise Commercial Movers',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://boise-commercial-movers.com',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
        <BreadcrumbSchema siteName="Top Shelf Commercial Movers" siteUrl="https://boise-commercial-movers.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
      </head>
      <body className={`${montserrat.variable} ${oswald.variable} font-sans antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-581QKP6ZE5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-581QKP6ZE5');
          `}
        </Script>
        <QuoteFormProvider>
          <Header />
          {children}
          <Footer />
        </QuoteFormProvider>
      </body>
    </html>
  )
}
