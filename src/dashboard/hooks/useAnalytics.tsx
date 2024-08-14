import { useState } from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { ANALYTICS_FAKE_DATA } from "../helpers";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const useAnalytics = () => {
  const [chartData, setChartData] = useState({
    labels: ANALYTICS_FAKE_DATA[0].sesiones.map(element => element.fecha),
    datasets: [
      {
        data: ANALYTICS_FAKE_DATA[0].sesiones.map(element => element.sesiones),
        label: "Sesiones",
        backgroundColor: ["rgba(75,192,192,1)"],
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
      {
        data: ANALYTICS_FAKE_DATA[0].vistasPagina.map(
          element => element.vistas
        ),
        label: "Vista diarias de página",
        backgroundColor: ["#2a71d0"],
        borderColor: "#2a71d0",
        borderWidth: 2,
      },
    ],
  });

  return {
    chartData,
  };
};
