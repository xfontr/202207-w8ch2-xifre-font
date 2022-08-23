import { useEffect, useState } from "react";
import useStarWars from "../../hooks/useStarWars";

const App = (): JSX.Element => {
  const { getStarshipCount, getStarships } = useStarWars();
  const [ships, setShips] = useState("0");
  const [shipList, setShipList] = useState({});

  useEffect(() => {
    (async () => {
      const ships = await getStarshipCount();
      if (ships) {
        setShips(ships);
      }
    })();
  }, [getStarshipCount]);

  useEffect(() => {
    (async () => {
      setShipList(await getStarships());
    })();
  }, [getStarships]);

  return (
    <div className="app">
      <h1 className="header-title">Starwars test</h1>
      <h2>Starhips</h2>
      <span>Total ships: {ships}</span>
      <h2>Starhips by class</h2>
      <ul>
        {Object.entries(shipList).map((ship) => (
          <li>
            <>
              {ship[0].charAt(0).toUpperCase() + ship[0].slice(1)} ({ship[1]})
            </>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
