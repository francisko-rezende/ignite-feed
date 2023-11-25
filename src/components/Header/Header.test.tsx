import { render, screen } from "@testing-library/react";
import styles from "./Header.module.css";

import { Header } from ".";

describe("<Header />", () => {
  it("should render the header with the Ignite logo and children", () => {
    const headerText = "Ignite Feed";
    render(<Header>{headerText}</Header>);
    const headerElement = screen.getByText(/ignite feed/i);
    const logoElement = screen.getByAltText("Logotipo do Ignite");

    expect(headerElement).toBeInTheDocument();
    expect(logoElement).toBeInTheDocument();
    expect(headerElement).toHaveClass(styles.header);
    expect(headerElement).toHaveTextContent(headerText);
  });
});
