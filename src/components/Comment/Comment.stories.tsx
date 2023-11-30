import { Meta, StoryObj } from "@storybook/react";
import { Comment } from ".";

const meta = {
  title: "Comment",
  component: Comment,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Comment>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { content: "Comment content" } };
