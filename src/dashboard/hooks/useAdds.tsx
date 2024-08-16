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

export const useAdds = () => {
  const {
    dataFetching: { data, errorFetching, errorMessage, isLoading },
  } = useFetch("test-admira", "google-adds");
  const [chartDataBar, setChartDataBar] = useState({});

  useEffect(() => {
    if (data) {
      handleFetchData();
    }
  }, [data]);

  const handleFetchData = () => {
    setChartDataBar({
      labels: data.map((element: any) => element.nombre),
      datasets: [
        {
          data: data.map((element: any) => element.impresiones),
          label: "Impresiones",
          backgroundColor: ["#ff6384"],
          borderColor: "#ff6384",
          borderWidth: 2,
        },
        {
          data: data.map((element: any) => element.clics),
          label: "Clics",
          backgroundColor: ["#2a71d0"],
          borderColor: "#2a71d0",
          borderWidth: 2,
        },
        {
          data: data.map((element: any) => element.conversiones),
          label: "Conversiones",
          backgroundColor: ["rgba(75,192,192,1)"],
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 2,
        },
      ],
    });
  };

  return {
    chartDataBar,
    errorFetching,
    errorMessage,
    isLoading,
  };
};
