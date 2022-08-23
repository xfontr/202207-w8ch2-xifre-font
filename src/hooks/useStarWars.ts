import { useCallback } from "react";

const apiUrl = process.env.REACT_APP_API_URL as string;

const useStarWars = () => {
  const getStarshipCount = useCallback(async () => {
    const apiData = await fetch(apiUrl);
    const { count } = await apiData.json();

    return count;
  }, []);

  return {
    getStarshipCount,
  };
};

export default useStarWars;
