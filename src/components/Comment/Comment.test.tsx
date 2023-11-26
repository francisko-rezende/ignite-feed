import { render, screen } from "@testing-library/react";

import { Comment } from ".";

describe("<Comment />", () => {
  it("should render the comment with author avatar, name, time, content, and footer with clap button", () => {
    render(<Comment />);
    const avatarElement = screen.getByAltText("comment author avatar");
    const authorElement = screen.getByText(/Francisko de Moraes Rezende/i);
    const timeElement = screen.getByText("Around 1 hour ago");
    const clapButton = screen.getByText("Clap");

    expect(avatarElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
    expect(timeElement).toBeInTheDocument();
    expect(clapButton).toBeInTheDocument();
  });
});
