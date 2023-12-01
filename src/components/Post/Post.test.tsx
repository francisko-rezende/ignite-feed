import { render, screen } from "@testing-library/react";

import { Post } from ".";
import { renderWithUser } from "../../utils/tests";

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

  it("should add new posts", async () => {
    const { user } = renderWithUser(<Post {...mockPost} />);
    const textarea = screen.getByRole("textbox", {
      name: /give some feedback:/i,
    });
    await user.click(textarea);
    await user.type(textarea, "new comment");
    const submitButton = screen.getByRole("button", { name: /submit/i });
    await user.click(submitButton);
    const newCommentText = screen.getByText(/new comment/i);

    expect(newCommentText).toBeInTheDocument();
  });

  it("should delete posts", async () => {
    const { user } = renderWithUser(<Post {...mockPost} />);
    const textarea = screen.getByRole("textbox", {
      name: /give some feedback:/i,
    });
    await user.click(textarea);
    await user.type(textarea, "new comment");
    const submitButton = screen.getByRole("button", { name: /submit/i });
    await user.click(submitButton);
    const deleteButton = screen.getByTitle(/delete comment new comment/i);
    await user.click(deleteButton);
    const newCommentText = screen.queryByText(/new comment/i);
    expect(newCommentText).toBe(null);
  });
});
