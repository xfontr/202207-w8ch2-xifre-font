import { useEffect } from "react";
import useStarWars from "./hooks/useStarWars";

const App = (): JSX.Element => {
  const { getStarshipCount } = useStarWars();

  useEffect(() => {
    (async () => {
      console.log(await getStarshipCount());
    })();
  });

  return <div className="awpp"></div>;
};

export default App;
