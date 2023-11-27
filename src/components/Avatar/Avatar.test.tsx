import { render, screen } from "@testing-library/react";
import styles from "./Avatar.module.css";
import { Avatar } from ".";

describe("<Avatar />", () => {
  it("should render the heading", () => {
    render(
      <Avatar
        hasBorder
        alt="user avatar"
        src="https://github.com/francisko-rezende.png"
      />,
    );

    const avatar = screen.getByAltText(/user avatar/i);
    expect(avatar).toBeInTheDocument();
  });

  it("should render the heading with avatarWithBorder class", () => {
    render(
      <Avatar
        hasBorder
        alt="user avatar"
        src="https://github.com/francisko-rezende.png"
      />,
    );

    const avatar = screen.getByAltText(/user avatar/i);
    expect(avatar).toHaveClass(styles.avatarWithBorder);
  });

  it("should render the heading with avatar class", () => {
    render(
      <Avatar
        hasBorder={false}
        alt="user avatar"
        src="https://github.com/francisko-rezende.png"
      />,
    );

    const avatar = screen.getByAltText(/user avatar/i);
    expect(avatar).toHaveClass(styles.avatar);
  });
});
