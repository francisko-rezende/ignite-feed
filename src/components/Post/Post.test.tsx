import { render, screen } from "@testing-library/react";

import { Post } from ".";

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

describe("Post", () => {
  it("should render the post article when Post component is rendered", () => {
    render(<Post {...mockPost} />);
    expect(screen.getByRole("article")).toBeInTheDocument();
  });

  it("should render the author's avatar when Post component is rendered", () => {
    render(<Post {...mockPost} />);
    expect(screen.getByAltText(/user avatar/i)).toBeInTheDocument();
  });

  it("should render the author's name when Post component is rendered", () => {
    render(<Post {...mockPost} />);
    const name = screen.getAllByText("Francisko de Moraes Rezende");
    expect(name[0]).toBeInTheDocument();
  });
});
