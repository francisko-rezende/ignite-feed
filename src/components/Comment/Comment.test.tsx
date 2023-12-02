import { render, screen } from "@testing-library/react";

import { Comment } from ".";
import { renderWithUser } from "../../utils/tests";

describe("<Comment />", () => {
  it("should render the comment with author avatar, name, time, content, and footer with clap button", () => {
    const content = "text comment";
    render(<Comment deleteComment={() => {}} content={content} />);
    const avatarElement = screen.getByAltText("comment author avatar");
    const authorElement = screen.getByText(/Francisko de Moraes Rezende/i);
    const timeElement = screen.getByText("Around 1 hour ago");
    const contentElement = screen.getByText(content);
    const clapButton = screen.getByText("Clap");

    expect(avatarElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
    expect(timeElement).toBeInTheDocument();
    expect(clapButton).toBeInTheDocument();
  });

  it("should render the comment with 0 claps/likes", () => {
    const content = "text comment";
    render(<Comment deleteComment={() => {}} content={content} />);

    const clapButton = screen.getByRole("button", { name: /clap 0/i });
    expect(clapButton).toBeInTheDocument();
  });

  it("should increase the comment claps/likes when clicking the clap button", async () => {
    const content = "text comment";
    const { user } = renderWithUser(
      <Comment deleteComment={() => {}} content={content} />,
    );

    const clapButton = screen.getByRole("button", { name: /clap/i });
    await user.click(clapButton);
    const updatedClapButton = screen.getByRole("button", { name: /clap 1/i });
    expect(updatedClapButton).toBeInTheDocument();
  });

  it("should increase the comment claps/likes when clicking the clap button by one per click", async () => {
    const content = "text comment";
    const { user } = renderWithUser(
      <Comment deleteComment={() => {}} content={content} />,
    );

    const clapButton = screen.getByRole("button", { name: /clap/i });
    await user.click(clapButton);
    await user.click(clapButton);
    await user.click(clapButton);
    const updatedClapButton = screen.getByRole("button", { name: /clap 3/i });
    expect(updatedClapButton).toBeInTheDocument();
  });
});
