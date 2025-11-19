'use client'
import { useEffect, useRef, useState } from 'react'

type Props = { projectId: string; deploymentId: string }

export default function LogsViewer({ projectId, deploymentId }: Props) {
  const [lines, setLines] = useState<string[]>([])
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let active = true
    async function poll() {
      try {
        const res = await fetch(`/api/deployments/logs?projectId=${projectId}&deploymentId=${deploymentId}`)
        if (!res.ok) return
        const data = await res.json()
        if (active) setLines(data.lines || [])
      } catch {}
      setTimeout(poll, 1500)
    }
    poll()
    return () => { active = false }
  }, [projectId, deploymentId])

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight
  }, [lines])

  return (
    <div ref={ref} className="mono h-64 overflow-auto rounded-[18px] bg-black/40 border border-[var(--border-glow)] p-3" aria-label="live logs" role="log">
      {lines.map((l, i) => (
        <div key={i} className="text-secondary" style={{ lineHeight: '22px' }}>
          <span className="text-tertiary select-none pr-2">{String(i + 1).padStart(3, '0')}</span>
          {l}
        </div>
      ))}
    </div>
  )
}
