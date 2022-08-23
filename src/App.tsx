import { useEffect, useState } from "react";
import useStarWars from "./hooks/useStarWars";

const App = (): JSX.Element => {
  const { getStarshipCount } = useStarWars();
  const [shipData, setShipData] = useState({
    count: "0",
  });

  useEffect(() => {
    (async () => {
      const ships = await getStarshipCount();
      if (ships) {
        setShipData({ ...shipData, count: ships });
      }
    })();
  });

  return <div className="app"></div>;
};

export default App;
