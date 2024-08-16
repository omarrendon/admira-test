import React, { useCallback, useEffect, useState } from "react";

export const useFetch = (path: string) => {
  const [dataFetching, setDataFetching] = useState({
    isLoading: true,
    errorFetching: false,
    errorMessage: "",
    data: [],
  });

  const getDataFromAPI = useCallback(async (path: string) => {
    try {
      let newData = [];
      const response = await fetch(`https://apimocha.com/admira/${path}`);
      const data = await response.json();
      console.log(data);

      // newData = data.map((element: any) => {
      //   return {
      //     nombre: element.nombre,
      //   };
      // });

      // console.log(newData);

      setDataFetching({
        data,
        errorFetching: false,
        errorMessage: "",
        isLoading: false,
      });
    } catch (error) {
      console.log({ error });

      setDataFetching({
        data: [],
        errorFetching: true,
        errorMessage: "Algo ah  salido mal con la carga de datos.",
        isLoading: false,
      });
    }
  }, []);

  useEffect(() => {
    if (dataFetching.data.length === 0) getDataFromAPI(path);
  }, []);

  return {
    dataFetching,
  };
};
