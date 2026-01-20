import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from '../page.tsx'

describe("Home Counter Page", () => {
  test("renders initial count as 0", () => {
    render(<Home />);

    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });

  test("increments count when + button is clicked", async () => {
    render(<Home />);
    const user = userEvent.setup();

    await user.click(screen.getByText("+"));

    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
  });

  test("decrements count when - button is clicked", async () => {
    render(<Home />);
    const user = userEvent.setup();

    await user.click(screen.getByText("-"));

    expect(screen.getByText(/Count: -1/i)).toBeInTheDocument();
  });

  test("resets count to 0 when Reset button is clicked", async () => {
    render(<Home />);
    const user = userEvent.setup();

    await user.click(screen.getByText("+"));
    await user.click(screen.getByText("+"));
    await user.click(screen.getByText("Reset"));

    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });
});
