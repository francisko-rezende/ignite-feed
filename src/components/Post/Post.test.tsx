import { render, screen } from "@testing-library/react";

import { Post } from ".";

describe("Post", () => {
  it("should render the post article when Post component is rendered", () => {
    render(<Post />);
    expect(screen.getByRole("article")).toBeInTheDocument();
  });

  it("should render the author's avatar when Post component is rendered", () => {
    render(<Post />);
    expect(screen.getByAltText(/user avatar/i)).toBeInTheDocument();
  });

  it("should render the author's name when Post component is rendered", () => {
    render(<Post />);
    const name = screen.getAllByText("Francisko de Moraes Rezende");
    expect(name[0]).toBeInTheDocument();
  });
});
