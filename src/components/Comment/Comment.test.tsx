import { render, screen } from "@testing-library/react";

import { Comment } from ".";

describe("<Comment />", () => {
  it("should render the comment with author avatar, name, time, content, and footer with clap button", () => {
    const content = "text comment";
    render(<Comment content={content} />);
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
});
