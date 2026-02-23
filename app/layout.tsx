import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import AnimatedBackground from '@/components/animated-background'

const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Yuno',
  description: 'Reduce revenue leakage with Yuno. Session recording, staff management, and daily reports for gaming stores.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
      </head>
      <body className="font-sans antialiased">
        <AnimatedBackground />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
