import { useCallback, useEffect, useState } from "react";
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
  } = useFetch("google-adds");
  const [chartDataBar, setChartDataBar] = useState({});

  useEffect(() => {
    handleFetchData();
  }, []);

  // console.log(data.map(e => e));
  // data.campaigns.map((element: any) => element.nombre)
  const handleFetchData = useCallback(() => {
    setChartDataBar({
      labels: ["1", "2"],
      datasets: [
        // {
        //   data: data.campaigns.map((element: any) => element.impresiones),
        //   label: "Impresiones",
        //   backgroundColor: ["#ff6384"],
        //   borderColor: "#ff6384",
        //   borderWidth: 2,
        // },
        // {
        //   data: data.campaigns.map((element: any) => element.clics),
        //   label: "Clics",
        //   backgroundColor: ["#ff6384"],
        //   borderColor: "#ff6384",
        //   borderWidth: 2,
        // },
        // {
        //   data: data.campaigns.map((element: any) => element.conversiones),
        //   label: "Conversiones",
        //   backgroundColor: ["#ff6384"],
        //   borderColor: "#ff6384",
        //   borderWidth: 2,
        // },
      ],
    });
  }, []);

  return {
    chartDataBar,
    errorFetching,
    errorMessage,
    isLoading,
  };
};
