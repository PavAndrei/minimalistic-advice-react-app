import { useEffect, useState } from "react";
import { IAdvice } from "../models/IAdvice";

interface UseFetchResult {
  data: IAdvice | null;
  loading: boolean;
  error: Error | null;
}

export const useFetch = (url: string): UseFetchResult => {
  const [data, setData] = useState<IAdvice | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setLoading(false);
        setData(data.slip);
        setError(null);
      } catch (error) {
        console.error(error);
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, error };
};
