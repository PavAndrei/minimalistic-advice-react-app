import { IAdvice } from "../models/IAdvice";

export const fetchAdvice = async (url: string): Promise<IAdvice> => {
  const response = await fetch(`${url}?timestamp=${Date.now()}`);
  const data = await response.json();

  return data.slip;
};
