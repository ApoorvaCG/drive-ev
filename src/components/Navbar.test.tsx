import { render, screen, waitFor } from "@testing-library/react";
import Navbar from "@/components/Navbar";

describe("Navbar Component",  () => {
  it("renders the back link correctly", async () => {
    render(<Navbar />);
    
    await waitFor(() => {
      const backLink = screen.getByRole('navigation');
      expect(backLink).toBeInTheDocument();
    });
  });

  it("applies correct styles", () => {
    render(<Navbar />);

    const navbar = screen.getByRole("navigation");
    expect(navbar).toHaveStyle({
      padding: "10px 20px",
      width: "100%",
      borderBottom: "solid",
    });
  });
});
