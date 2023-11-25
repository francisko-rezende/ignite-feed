import { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from '.'

const meta = {
  title: 'Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
