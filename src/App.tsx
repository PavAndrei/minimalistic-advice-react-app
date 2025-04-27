import { useFetch } from "./hooks/useFetch";

import { BASE_URL } from "./constants/constants";
import { IconDice } from "./icons/IconDice";

const App = () => {
  const { data, error, loading } = useFetch(BASE_URL);

  return (
    <div className="wrapper">
      {loading && <span>Loading...</span>}
      {error && <span>Something went wrong...</span>}
      <h1 className="title">ADVICE #{data?.id}</h1>
      <p className="text">{data?.advice}</p>
      <div className="divider"></div>
      <button className="btn" aria-label="generate new advice">
        <IconDice />
      </button>
    </div>
  );
};

export default App;
