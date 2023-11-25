import { render, screen } from "@testing-library/react";

import { Sidebar } from ".";

describe("<Sidebar />", () => {
  it("should render a sidebar with a cover image, user profile, user job, and footer", () => {
    render(<Sidebar />);
    expect(
      screen.getByRole("img", { name: /user profile pic/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Francisko de Moraes Rezende/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Front-end Developer/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /edit your profile/i }),
    ).toBeInTheDocument();
  });
});
