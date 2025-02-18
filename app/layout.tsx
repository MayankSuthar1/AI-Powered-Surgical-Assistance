import type { Metadata } from 'next'
import './globals.css'
import { CursorProvider } from './context/CursorContext'

export const metadata: Metadata = {
  metadataBase: new URL('https://vaidyascan.vaidyanetraai.tech'),
  title: {
    default: 'Vaidya Scan | AI-Powered Cancer Surgery Assistant',
    template: '%s | Vaidya Scan'
  },
  description: 'Revolutionary AI-powered surgical assistance platform for cancer surgery. Advanced 3D visualization, real-time guidance, and precise tumor detection.',
  keywords: [
    'AI surgery',
    'cancer detection',
    'surgical planning',
    '3D visualization',
    'medical imaging',
    'tumor detection',
    'surgical assistance',
    'healthcare technology',
    'medical AI',
    'VaidyaNetra'
  ],
  authors: [{ name: 'VaidyaNetra AI' }],
  creator: 'VaidyaNetra AI',
  publisher: 'VaidyaNetra AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/vs-logo.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' }
    ],
    apple: '/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
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
    canonical: 'https://vaidyascan.vaidyanetraai.tech',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vaidyascan.vaidyanetraai.tech',
    title: 'Vaidya Scan | AI-Powered Cancer Surgery Assistant',
    description: 'Revolutionary AI-powered surgical assistance platform for cancer surgery. Advanced 3D visualization, real-time guidance, and precise tumor detection.',
    siteName: 'Vaidya Scan',
    images: [
      {
        url: '/vs-logo.svg',
        width: 1200,
        height: 630,
        alt: 'Vaidya Scan - AI Surgery Assistant',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaidya Scan | AI-Powered Cancer Surgery Assistant',
    description: 'Revolutionary AI-powered surgical assistance platform for cancer surgery. Advanced 3D visualization, real-time guidance, and precise tumor detection.',
    creator: '@vaidyanetra',
    images: ['/twitter-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </head>
      <body className="antialiased">
        <CursorProvider>
          {children}
        </CursorProvider>
      </body>
    </html>
  )
}
