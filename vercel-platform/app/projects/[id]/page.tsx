import { prisma } from '@/lib/prisma'
import LogsViewer from '@/components/LogsViewer'
import Link from 'next/link'

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const project = await prisma.project.findUnique({ where: { id: params.id }, include: { deployments: { orderBy: { created_at: 'desc' } } } })
  if (!project) return <div className="p-6">not found</div>
  const latest = project.deployments[0]
  return (
    <main className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="h1">{project.name}</h1>
        <Link href={`/projects/${project.id}/deployments`} className="px-3 py-2 rounded-[18px] bg-[var(--accent)] text-[var(--bg-dusk)]">view deployments</Link>
      </div>
      {latest && (
        <section className="grid md:grid-cols-2 gap-4">
          <div className="bg-glass p-5 rounded-[18px]">
            <h2 className="h2 text-secondary mb-2">latest deployment</h2>
            <div className="body">{latest.status} · {latest.branch} · {latest.commit_sha?.slice(0,7)}</div>
          </div>
          <div className="bg-glass p-5 rounded-[18px]">
            <h2 className="h2 text-secondary mb-2">logs</h2>
            <LogsViewer projectId={project.id} deploymentId={latest.id} />
          </div>
        </section>
      )}
    </main>
  )
}
