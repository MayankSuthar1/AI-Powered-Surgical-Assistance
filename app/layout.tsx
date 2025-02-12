import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vaidya Scan',
  description: 'Created By VaidyaNetra AI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
