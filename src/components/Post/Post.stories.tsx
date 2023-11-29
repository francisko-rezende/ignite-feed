import { Meta, StoryObj } from "@storybook/react";
import { Post } from ".";

const meta = {
  title: "Post",
  component: Post,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Post>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockPost = {
  id: 1,
  author: {
    avatarUrl: "https://github.com/francisko-rezende.png",
    name: "Francisko de Moraes Rezende",
    role: "Front-end developer",
  },
  content: [
    {
      type: "paragraph",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab nobis non tempora qui sit repudiandae. Repudiandae, libero? Inventore sunt voluptatibus reiciendis maxime consectetur quos harum doloremque officia soluta ad.",
    },
    {
      type: "paragraph",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab nobis non tempora qui sit repudiandae. Repudiandae, libero? Inventore sunt voluptatibus reiciendis maxime consectetur quos harum doloremque officia soluta ad.",
    },
    { type: "hashtag", content: "#newproject" },
  ],
  publishedAt: new Date("2022-05-03 20:00"),
};

export const Default: Story = { args: { ...mockPost } };
