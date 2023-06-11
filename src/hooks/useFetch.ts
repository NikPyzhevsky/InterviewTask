import {useCallback, useEffect, useState} from 'react';
import axios, {AxiosError, AxiosRequestConfig} from 'axios';

interface State<T> {
  data?: T;
  error?: Error;
  isLoading: boolean;
  refresh: () => void;
}

type useFetchDataT = <T = unknown>(
  url: string,
  options?: AxiosRequestConfig<any>,
) => State<T>;
// @ts-ignore
export const useFetch: useFetchDataT = (url, options) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const {data: response} = await axios.get(url, options);
      setData(response);
      // eslint-disable-next-line @typescript-eslint/no-shadow,no-catch-shadow
    } catch (error) {
      console.error(error);
      setError(error as AxiosError);
    }
    setIsLoading(false);
  }, [options, url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    isLoading,
    error,
    refresh: fetchData,
  };
};
