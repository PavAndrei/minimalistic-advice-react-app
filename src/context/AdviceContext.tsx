import { createContext, useContext } from "react";
import { BASE_URL } from "../constants/constants";
import { fetchAdvice } from "../utils/fetchAdvice";
import { useFetch } from "../hooks/useFetch";
import { IAdvice } from "../models/IAdvice";

interface AdviceContextValues {
  data: IAdvice | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

const AdviceContext = createContext<AdviceContextValues | undefined>(undefined);

export const AdviceProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, loading, error, refetch } = useFetch(BASE_URL, fetchAdvice);

  return (
    <AdviceContext.Provider value={{ data, loading, error, refetch }}>
      {children}
    </AdviceContext.Provider>
  );
};

export const useAdviceContext = () => {
  const context = useContext(AdviceContext);
  if (!context)
    throw new Error("useDataProvider must be used within DataProvider");
  return context;
};
