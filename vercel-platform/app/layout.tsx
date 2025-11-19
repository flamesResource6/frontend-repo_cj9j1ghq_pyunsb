import './globals.css'
import '../styles/tokens.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glass Platform',
  description: 'Deploy projects with a glass dashboard aesthetic',
  themeColor: '#0A0E12',
  openGraph: {
    title: 'Glass Platform',
    description: 'Deploy projects with a glass dashboard aesthetic'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--bg-dusk)] text-[var(--text-primary)]">
        {children}
      </body>
    </html>
  )
}
