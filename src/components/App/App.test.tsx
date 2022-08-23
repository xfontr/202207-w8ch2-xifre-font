import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

const mockGetStarshipCount = jest.fn().mockResolvedValue("34");

jest.mock("../../hooks/useStarWars", () => () => ({
  ...jest.requireActual("../../hooks/useStarWars"),
  getStarshipCount: mockGetStarshipCount,
}));

describe("Given a App component", () => {
  describe("When instantiated", () => {
    test("Then it should show call the function getStarshipCount to retreive the ship count", async () => {
      render(<App />);

      await waitFor(() => {
        expect(mockGetStarshipCount).toHaveBeenCalled();
      });
    });
  });
});
