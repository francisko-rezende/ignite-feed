import { Meta, StoryObj } from '@storybook/react'
import { Post } from '.'

const meta = {
  title: 'Post',
  component: Post,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Post>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
