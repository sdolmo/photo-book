import { render, screen } from "@testing-library/react";
import App from "./App";

/*global test, expect*/
/*eslint no-undef: "error"*/

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
