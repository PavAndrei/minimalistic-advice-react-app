import { useFetch } from "./hooks/useFetch";

import { BASE_URL } from "./constants/constants";
import { IconDice } from "./icons/IconDice";
import { fetchAdvice } from "./utils/fetchAdvice";

const App = () => {
  const { data, loading, error, refetch } = useFetch(BASE_URL, fetchAdvice);

  return (
    <div className="wrapper">
      {loading && <span>Loading...</span>}
      {error && <span>Something went wrong...</span>}
      <h1 className="title">ADVICE #{data?.id}</h1>
      <p className="text">{data?.advice}</p>
      <div className="divider"></div>
      <button
        onClick={refetch}
        className="btn"
        aria-label="generate new advice"
      >
        <IconDice />
      </button>
    </div>
  );
};

export default App;
