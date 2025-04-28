import { useAdviceContext } from "../context/AdviceContext";

export const Warning = () => {
  const { loading, error } = useAdviceContext();

  if (loading) {
    return loading && <span className="message">Loading...</span>;
  }

  if (error) {
    return error && <span className="message">Something went wrong...</span>;
  }
};
