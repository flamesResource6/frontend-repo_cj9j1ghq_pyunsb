import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
const prisma = new PrismaClient()

async function main() {
  const hash = await bcrypt.hash('password123', 10)
  const [owner, admin, member] = await Promise.all([
    prisma.user.upsert({ where: { email: 'owner@example.com' }, update: {}, create: { email: 'owner@example.com', hashed_password: hash, name: 'Owner One', role: 'owner' } }),
    prisma.user.upsert({ where: { email: 'admin@example.com' }, update: {}, create: { email: 'admin@example.com', hashed_password: hash, name: 'Admin Ada', role: 'admin' } }),
    prisma.user.upsert({ where: { email: 'member@example.com' }, update: {}, create: { email: 'member@example.com', hashed_password: hash, name: 'Member Mae', role: 'member' } }),
  ])

  const teamA = await prisma.team.create({ data: { name: 'Nebula', slug: 'nebula', owner_id: owner.id } })
  const teamB = await prisma.team.create({ data: { name: 'Aurora', slug: 'aurora', owner_id: admin.id } })
  await prisma.teamMember.createMany({ data: [
    { team_id: teamA.id, user_id: owner.id, role: 'owner' },
    { team_id: teamA.id, user_id: member.id, role: 'member' },
    { team_id: teamB.id, user_id: admin.id, role: 'owner' },
    { team_id: teamB.id, user_id: member.id, role: 'member' },
  ] })

  const projects = await Promise.all([
    prisma.project.create({ data: { name: 'Orbit', slug: 'orbit', owner_id: owner.id, team_id: teamA.id } }),
    prisma.project.create({ data: { name: 'Pulse', slug: 'pulse', owner_id: owner.id, team_id: teamA.id } }),
    prisma.project.create({ data: { name: 'Lumen', slug: 'lumen', owner_id: admin.id, team_id: teamB.id } }),
    prisma.project.create({ data: { name: 'Echo', slug: 'echo', owner_id: admin.id, team_id: teamB.id } }),
  ])

  const statuses = ['success', 'warning', 'suspended']
  for (const p of projects) {
    for (let i = 0; i < 3; i++) {
      await prisma.deployment.create({ data: {
        project_id: p.id,
        status: statuses[(i + projects.indexOf(p)) % statuses.length],
        commit_sha: Math.random().toString(16).slice(2, 9),
        branch: ['main', 'dev', 'feat/x'][i % 3],
        url: `https://${p.slug}-${i}.example.com`
      } })
    }
    await prisma.domain.create({ data: { project_id: p.id, domain: `${p.slug}.example.com`, verified: Math.random() > 0.3 } })
    await prisma.activity.create({ data: { actor_id: owner.id, project_id: p.id, action: 'deploy.trigger', metadata: { by: 'seed' } } })
  }
}

main().finally(async () => { await prisma.$disconnect() })
