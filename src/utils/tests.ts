import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export const renderWithUser = (component: React.ReactElement) => {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
};
