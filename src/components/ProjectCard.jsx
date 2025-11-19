import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  const status = project?.deployments?.[0]?.status ?? 'idle'
  const ts = project?.deployments?.[0]?.created_at
  return (
    <Link to={`/projects/${project.id}`} className="group rounded-[18px] bg-glass shadow-glass p-5 block focus-visible:accent-ring" aria-label={`open project ${project.name}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="text-lg font-semibold text-white">{project.name}</div>
        <span aria-label={`status ${status}`} className={`px-2 py-1 rounded-full text-[12px] ${statusColor(status)}`}>{status}</span>
      </div>
      <div className="text-secondary text-sm">last deploy {ts ? new Date(ts).toLocaleString() : 'n/a'}</div>
      <div className="mt-3 h-10 bg-[var(--accent-soft,#60E6D9)]/15 rounded-[12px]" aria-hidden />
      <div className="mt-3 flex justify-end">
        <span className="text-sm text-secondary group-hover:text-white transition">open →</span>
      </div>
    </Link>
  )
}

function statusColor(s) {
  if (s === 'success') return 'bg-emerald-500/20 text-emerald-200 border border-emerald-300/30'
  if (s === 'warning') return 'bg-amber-500/20 text-amber-200 border border-amber-300/30'
  if (s === 'error' || s === 'suspended') return 'bg-rose-500/20 text-rose-200 border border-rose-300/30'
  return 'bg-slate-500/20 text-slate-200 border border-slate-300/30'
}
