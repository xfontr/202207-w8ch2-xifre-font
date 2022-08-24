import { useCallback } from "react";

const apiUrl = process.env.REACT_APP_API_URL as string;

export interface Ship {
  name: string;
  class: string;
}

const useStarWars = () => {
  const getStarshipCount = useCallback(async (): Promise<string | false> => {
    try {
      const apiData = await fetch(apiUrl);
      const { count }: { count: string } = await apiData.json();
      return count;
    } catch (error) {
      return false;
    }
  }, []);

  const getStarships = useCallback(async () => {
    const apiData = [
      await fetch(`${apiUrl}/?page=1`),
      await fetch(`${apiUrl}/?page=2`),
      await fetch(`${apiUrl}/?page=3`),
      await fetch(`${apiUrl}/?page=4`),
    ];

    const responses: { results: { name: string; starship_class: string }[] }[] =
      [
        await apiData[0].json(),
        await apiData[1].json(),
        await apiData[2].json(),
        await apiData[3].json(),
      ];

    const ships: Ship[] = [];
    responses.forEach((page) => {
      page.results.forEach((ship) =>
        ships.push({
          name: ship.name,
          class: ship.starship_class,
        })
      );
    });

    const classes: { [key: string]: number } = {};

    ships.forEach((ship: any) => {
      if (!classes[`${ship.class}`]) {
        classes[`${ship.class}`] = 1;
      } else {
        classes[ship.class] = classes[ship.class] + 1;
      }
    });

    return classes;
  }, []);

  return {
    getStarshipCount,
    getStarships,
  };
};

export default useStarWars;
