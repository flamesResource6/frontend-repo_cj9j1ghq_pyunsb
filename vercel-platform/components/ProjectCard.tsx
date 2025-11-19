/**
 * ProjectCard
 * Displays project status and quick actions.
 * Accessibility: entire card is a link; status has aria-label.
 */
'use client'
import Link from 'next/link'
import { useMemo } from 'react'

type Project = {
  id: string
  name: string
  slug: string
  deployments?: { status: string; created_at: Date }[]
}

export default function ProjectCard({ project }: { project: Project }) {
  const status = useMemo(() => project.deployments?.[0]?.status ?? 'idle', [project])
  const ts = useMemo(() => project.deployments?.[0]?.created_at, [project])
  return (
    <Link href={`/projects/${project.id}`} className="group rounded-[18px] bg-glass shadow-glass p-5 block focus-visible:accent-ring">
      <div className="flex items-center justify-between mb-2">
        <div className="h1">{project.name}</div>
        <span aria-label={`status ${status}`} className={`px-2 py-1 rounded-full text-[12px] ${statusColor(status)}`}>{status}</span>
      </div>
      <div className="text-secondary small">last deploy {ts ? new Date(ts).toLocaleString() : 'n/a'}</div>
      <div className="mt-3 h-10 bg-[var(--accent-soft)] rounded-[12px]" aria-hidden />
      <div className="mt-3 flex justify-end">
        <span className="small text-secondary group-hover:text-primary transition">open →</span>
      </div>
    </Link>
  )
}

function statusColor(s: string) {
  if (s === 'success') return 'bg-emerald-500/20 text-emerald-200 border border-emerald-300/30'
  if (s === 'warning') return 'bg-amber-500/20 text-amber-200 border border-amber-300/30'
  if (s === 'error' || s === 'suspended') return 'bg-rose-500/20 text-rose-200 border border-rose-300/30'
  return 'bg-slate-500/20 text-slate-200 border border-slate-300/30'
}
