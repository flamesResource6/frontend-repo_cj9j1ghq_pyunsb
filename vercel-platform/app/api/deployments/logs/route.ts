import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const deploymentId = searchParams.get('deploymentId')
  // Mocked logs stream; in production, tail from provider or DB
  const lines = Array.from({ length: 24 }, (_, i) => `[${new Date().toISOString()}] step ${i + 1} for ${deploymentId}`)
  return NextResponse.json({ lines })
}
