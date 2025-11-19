import type { Meta, StoryObj } from '@storybook/react'
import LogsViewer from '../components/LogsViewer'

const meta: Meta<typeof LogsViewer> = { component: LogsViewer, title: 'Components/LogsViewer' }
export default meta

type Story = StoryObj<typeof LogsViewer>
export const Default: Story = { args: { projectId: 'p1', deploymentId: 'd1' } }
