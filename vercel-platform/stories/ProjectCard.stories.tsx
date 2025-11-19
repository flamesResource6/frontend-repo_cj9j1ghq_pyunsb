import type { Meta, StoryObj } from '@storybook/react'
import ProjectCard from '../components/ProjectCard'

const meta: Meta<typeof ProjectCard> = { component: ProjectCard, title: 'Components/ProjectCard' }
export default meta

type Story = StoryObj<typeof ProjectCard>
export const Default: Story = {
  args: { project: { id: '1', name: 'Orbit', slug: 'orbit', deployments: [{ status: 'success', created_at: new Date() }] } }
}
