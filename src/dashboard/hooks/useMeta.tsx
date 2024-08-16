import { useEffect, useState } from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";

import { useFetch } from "./useFetch";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const useMeta = () => {
  const {
    dataFetching: { data, errorFetching, errorMessage, isLoading },
  } = useFetch("test-admira", "meta-adds");

  const [pieAgeChart, setPieAgeChart] = useState({});

  useEffect(() => {
    if (data) {
      handleFetchData();
    }
  }, [data]);

  const handleFetchData = () => {
    setPieAgeChart({
      labels: data.map((element: any) => element.rango),
      datasets: [
        {
          data: data.map((element: any) => element.porcentaje),
          label: "Edades",
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "#4BC0C0",
            "#9966FF",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "#4BC0C0",
            "#9966FF",
          ],
          borderWidth: 2,
        },
      ],
    });
  };

  return {
    pieAgeChart,
    errorFetching,
    errorMessage,
    isLoading,
  };
};
