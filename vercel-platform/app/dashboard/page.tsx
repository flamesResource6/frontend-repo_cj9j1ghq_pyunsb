import { prisma } from '@/lib/prisma'
import ProjectCard from '@/components/ProjectCard'
import MetricTile from '@/components/MetricTile'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const [projects, deployments] = await Promise.all([
    prisma.project.findMany({ include: { deployments: { take: 1, orderBy: { created_at: 'desc' } } } }),
    prisma.deployment.findMany({ take: 10, orderBy: { created_at: 'desc' } })
  ])

  return (
    <main className="p-6 space-y-8">
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricTile label="projects" value={projects.length} trend={{ value: 3, direction: 'up' }} />
        <MetricTile label="deploys" value={deployments.length} trend={{ value: 5, direction: 'up' }} />
        <MetricTile label="success rate" value={"98%"} trend={{ value: 1, direction: 'down' }} />
        <MetricTile label="avg build" value={"2m 14s"} trend={{ value: 12, direction: 'down' }} />
      </section>
      <section className="space-y-4">
        <h2 className="h2 text-secondary">your projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map(p => <ProjectCard key={p.id} project={p as any} />)}
        </div>
      </section>
    </main>
  )
}
