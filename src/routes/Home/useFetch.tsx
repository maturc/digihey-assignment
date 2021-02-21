import { useEffect, useState } from "react";

export const useFetch = (requestUrl: string) => {
  const [data, setData] = useState<Array<ITransformer> | null>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(requestUrl);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [requestUrl]);

  return { data, error, isLoading };
};