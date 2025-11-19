import type { Meta, StoryObj } from '@storybook/react'
import MetricTile from '../components/MetricTile'

const meta: Meta<typeof MetricTile> = { component: MetricTile, title: 'Components/MetricTile' }
export default meta

type Story = StoryObj<typeof MetricTile>
export const Default: Story = { args: { label: 'projects', value: 12, trend: { value: 3, direction: 'up' } } }
