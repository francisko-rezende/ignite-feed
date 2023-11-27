import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";

const meta = {
  title: "Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithBorder: Story = {
  args: { hasBorder: true, src: "https://github.com/francisko-rezende.png" },
};
export const WithoutBorder: Story = {
  args: { hasBorder: false, src: "https://github.com/francisko-rezende.png" },
};
