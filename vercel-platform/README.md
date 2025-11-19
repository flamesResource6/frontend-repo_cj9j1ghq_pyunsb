# Glass Dashboard – Vercel‑style Platform (Next.js + TypeScript + Tailwind + Prisma)

This repository contains a production‑ready scaffold for a multi‑tenant deployment platform inspired by Vercel, built with:

- Next.js (App Router, React Server Components preferred)
- TypeScript (strict)
- Tailwind CSS using the provided Glass Dashboard design tokens
- Prisma ORM with Postgres
- Jest + React Testing Library + Storybook
- Playwright for E2E and axe-core for accessibility checks
- GitHub Actions CI + Vercel Ready config + Dockerfile + docker-compose

Notes
- Data and OAuth flows are partially mocked/stubbed. Clear comments mark where real integrations should be added.
- All UI components follow the Glass design tokens and spacing/typography rules.
- All interactive components are keyboard-accessible and include appropriate aria attributes.

Quick start
1. Copy env file and set secrets
   cp .env.example .env
   # Fill DATABASE_URL (Postgres), NEXTAUTH_SECRET, etc.

2. Install deps and set up DB
   npm install
   npx prisma migrate dev
   npx prisma db seed

3. Run app
   npm run dev

4. Run checks
   npm run lint
   npm run typecheck
   npm run test
   npm run test:e2e

5. Storybook
   npm run storybook

6. Build
   npm run build && npm run start

Environment variables
- DATABASE_URL: Postgres connection string
- NEXTAUTH_SECRET: Random 32+ char string
- VERCEL_TOKEN: Placeholder for provider integration (optional)
- NEXT_PUBLIC_APP_URL: Base URL for next/links and OpenGraph

Database
- Prisma schema is in prisma/schema.prisma
- SQL migrations are in prisma/migrations
- Seed script creates 3 users, 2 teams, 4 projects, 10 deployments, domains, and activity

Design system
- Tokens defined in styles/tokens.css and mapped into Tailwind in tailwind.config.ts
- Utility classes: bg-glass, shadow-glass, backdrop-blur-glass, accent-ring

Testing
- Unit: Jest + RTL
- E2E: Playwright (login, create project, trigger deploy)
- Accessibility: axe-core test for dashboard and project pages

Deployment
- Vercel configuration (vercel.json) is included
- GitHub Actions runs lint, typecheck, tests, and build on PRs

Handoff
- See /design/ for tokens JSON, Figma component spec, mockup frames, ERD, and accessibility checklist
- See /api/openapi.json for API reference and Postman collection in /api/postman.collection.json

