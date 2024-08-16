import { useEffect, useState } from "react";

import { useFetch } from "./useFetch";

export const useMetaGender = () => {
  const {
    dataFetching: {
      data: dataGender,
      errorFetching: error,
      errorMessage: message,
      isLoading: loading,
    },
  } = useFetch("test-admira", "meta-adds-gender");
  const [pieGenderChart, setPieGenderChart] = useState({});

  useEffect(() => {
    if (dataGender) {
      handleFetchDataGender();
    }
  }, [, dataGender]);

  const handleFetchDataGender = () => {
    setPieGenderChart({
      labels: dataGender.map((element: any) => element.tipo),
      datasets: [
        {
          data: dataGender.map((element: any) => element.porcentaje),
          label: "Genero",
          backgroundColor: ["rgb(255, 99, 132)", "#9966FF"],
          borderColor: ["rgb(255, 99, 132)", "#9966FF"],
          borderWidth: 2,
        },
      ],
    });
  };

  return {
    pieGenderChart,
    error,
    message,
    loading,
  };
};
