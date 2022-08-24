import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("Given a App component", () => {
  describe("When instantiated", () => {
    test("Then it should show a heading", async () => {
      render(<App />);

      const heading = screen.getByRole("heading", {
        name: "Starhips",
        level: 2,
      });

      const shipCount = screen.queryByText("Total ships: 36");
      expect(shipCount).toBeNull();

      await waitFor(() => {
        const updatedCount = screen.getByText("Total ships: 36");
        expect(updatedCount).toBeInTheDocument();
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
