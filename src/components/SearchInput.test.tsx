import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "@/components/SearchInput";

describe("SearchInput Component", () => {
  it("renders the input field and browse EVs button when searchTerm is not provided", () => {
    render(<SearchInput />);

    const inputField = screen.getByPlaceholderText("Search your EV here...");
    const browseButton = screen.getByRole("button", { name: /search/i });

    expect(inputField).toBeInTheDocument();
    expect(browseButton).toBeInTheDocument();
  });

  it("resets the form when the clear button is clicked", () => {
    render(<SearchInput searchTerm="" />);
    const clearButton = screen.getByRole("button", { name: /clear/i });
    fireEvent.click(clearButton);

    const inputField = screen.getByPlaceholderText("Search your EV here...");
    expect(inputField).toHaveValue("");
  });
  it("does not submit when the input is empty and user submits form", () => {
    render(<SearchInput />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);
  });
});
