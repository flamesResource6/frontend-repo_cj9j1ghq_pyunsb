import { useEffect, useRef, useState } from 'react'

export default function LogsViewer({ projectId, deploymentId }) {
  const [lines, setLines] = useState([])
  const ref = useRef(null)

  useEffect(() => {
    let active = true
    async function poll() {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || ''
        const path = baseUrl ? `${baseUrl}/api/deployments/logs?projectId=${projectId}&deploymentId=${deploymentId}` : `/api/deployments/logs?projectId=${projectId}&deploymentId=${deploymentId}`
        const res = await fetch(path)
        if (res.ok) {
          const data = await res.json()
          if (active) setLines(data.lines || [])
        }
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
    <div ref={ref} className="font-mono h-64 overflow-auto rounded-[18px] bg-black/40 border border-white/20 p-3 text-white/80" aria-label="live logs" role="log">
      {lines.map((l, i) => (
        <div key={i} className="text-white/70" style={{ lineHeight: '22px' }}>
          <span className="text-white/40 select-none pr-2">{String(i + 1).padStart(3, '0')}</span>
          {l}
        </div>
      ))}
    </div>
  )
}
