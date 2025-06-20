import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FastBroc',
  description: 'Une plateforme simple et élégante',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="light">
      <body className="bg-white">{children}</body>
    </html>
  )
}
