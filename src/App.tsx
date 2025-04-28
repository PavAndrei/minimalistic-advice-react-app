import { Content } from "./components/Content";
import { Warning } from "./components/Warning";
import { AdviceProvider } from "./context/AdviceContext";

const App = () => {
  return (
    <AdviceProvider>
      <div className="wrapper">
        <Warning />
        <Content />
      </div>
    </AdviceProvider>
  );
};

export default App;
