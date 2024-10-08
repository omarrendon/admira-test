import { useCallback, useEffect, useState } from "react";

export const useFetch = (endpoint: string, path: string) => {
  const [dataFetching, setDataFetching] = useState({
    isLoading: true,
    errorFetching: false,
    errorMessage: "",
    data: [],
  });

  const getDataFromAPI = useCallback(async (endpoint: string, path: string) => {
    try {
      const response = await fetch(`https://apimocha.com/${endpoint}/${path}`);
      const data = await response.json();
      const { campaigns } = data;

      setDataFetching({
        data: campaigns,
        errorFetching: false,
        errorMessage: "",
        isLoading: false,
      });
    } catch (error) {
      setDataFetching({
        data: [],
        errorFetching: true,
        errorMessage: "Algo ah  salido mal con la carga de datos.",
        isLoading: false,
      });
    }
  }, []);

  useEffect(() => {
    if (dataFetching.data.length === 0) getDataFromAPI(endpoint, path);
  }, []);

  return {
    dataFetching,
  };
};
