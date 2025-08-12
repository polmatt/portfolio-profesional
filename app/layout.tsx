import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pablo Cortés - Desarrollador Frontend',
  description: 'Portfolio profesional de Pablo Cortés, desarrollador frontend especializado en React, Next.js, TypeScript y Flutter. Creando experiencias web modernas y funcionales.',
  keywords: ['Pablo Cortés', 'desarrollador frontend', 'React', 'Next.js', 'TypeScript', 'Flutter', 'portfolio', 'desarrollador web'],
  authors: [{ name: 'Pablo Cortés' }],
  creator: 'Pablo Cortés',
  publisher: 'Pablo Cortés',
  icons: {
    icon: '/favicon-portfolio.png',
    shortcut: '/favicon-portfolio.png',
    apple: '/favicon-portfolio.png',
  },
  openGraph: {
    title: 'Pablo Cortés - Desarrollador Frontend',
    description: 'Portfolio profesional de Pablo Cortés, desarrollador frontend especializado en React, Next.js, TypeScript y Flutter.',
    url: 'https://pablo-cortes-portfolio.vercel.app',
    siteName: 'Pablo Cortés Portfolio',
    type: 'website',
    images: [
      {
        url: '/pablo-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Pablo Cortés - Desarrollador Frontend',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pablo Cortés - Desarrollador Frontend',
    description: 'Portfolio profesional de Pablo Cortés, desarrollador frontend especializado en React, Next.js, TypeScript y Flutter.',
    images: ['/pablo-hero.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon-portfolio.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body>{children}</body>
    </html>
  )
}
