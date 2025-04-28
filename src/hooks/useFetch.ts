import { useEffect, useState } from "react";

import { fetchAdvice } from "../utils/fetchAdvice";

import { IAdvice } from "../models/IAdvice";

export const useFetch = (
  url: string,
  cb: (url: string) => Promise<IAdvice>
) => {
  const [data, setData] = useState<null | IAdvice>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const getData = async () => {
    try {
      const result = await fetchAdvice(url);
      setData(result);
    } catch (error) {
      setError(error as Error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [url, cb]);

  return { data, loading, error, refetch: getData };
};
