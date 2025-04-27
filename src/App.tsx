import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return <div>advice</div>;
};

export default App;
