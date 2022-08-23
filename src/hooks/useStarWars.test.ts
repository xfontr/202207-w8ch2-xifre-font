import { renderHook } from "@testing-library/react";
import useStarWars from "./useStarWars";

describe("Given a useStarWars function that returns a getStarShip count function", () => {
  describe("When called", () => {
    test("Then it should return a count of ships", async () => {
      const expectedShipCount = "36";
      const {
        result: {
          current: { getStarshipCount },
        },
      } = renderHook(useStarWars);

      const shipCount = await getStarshipCount();

      expect(shipCount).toBe(expectedShipCount);
    });

    test("Then it should return false if the fetch failed", async () => {
      global.fetch = jest.fn().mockRejectedValue(new Error());

      const {
        result: {
          current: { getStarshipCount },
        },
      } = renderHook(useStarWars);

      const response = await getStarshipCount();

      expect(response).toBe(false);
    });
  });
});
