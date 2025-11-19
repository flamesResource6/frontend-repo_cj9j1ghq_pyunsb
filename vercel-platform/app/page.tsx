import Spline from '@splinetool/react-spline'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <main className="relative min-h-[80vh] flex flex-col items-center justify-center gap-8 p-8">
      <div className="w-full h-[360px] rounded-[18px] overflow-hidden bg-glass shadow-glass">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <section className="max-w-3xl text-center space-y-4">
        <h1 className="display">a glassy way to deploy</h1>
        <p className="body text-secondary">Multi-tenant deployments, domains, logs, and analytics with a soft glass aesthetic. Sign in to explore the dashboard.</p>
        <div className="flex items-center justify-center gap-3">
          <Link href="/auth/register" className="px-4 py-2 rounded-[18px] bg-[var(--accent)] text-[var(--bg-dusk)] hover:opacity-90 focus-visible:accent-ring">get started</Link>
          <Link href="/auth/login" className="px-4 py-2 rounded-[18px] bg-glass border border-[var(--border-glow)] text-primary">sign in</Link>
        </div>
      </section>
    </main>
  )
}
