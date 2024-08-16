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
  ArcElement,
  BarElement,
} from "chart.js";

import { CRM_FAKE_DATA } from "../helpers";

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

export const useCRM = () => {
  const [chartDataLine, setChartDataLine] = useState({
    labels: CRM_FAKE_DATA[0].leads.map(lead => lead.nombre),
    datasets: [
      {
        data: CRM_FAKE_DATA[0].leads.map(lead => lead.costoAdquisición),
        label: "Gasto publicitario",
        backgroundColor: ["#36a2eb"],
        borderColor: "#36a2eb",
        borderWidth: 2,
        yAxisID: "y",
      },
      {
        type: "bar",
        data: CRM_FAKE_DATA[0].leads.map(lead => lead.valorDeVida),
        label: "Participación",
        backgroundColor: ["#ff6384"],
        borderColor: "#ff6384",
        borderWidth: 2,
        yAxisID: "y1",
      },
    ],
  });

  const [chartDataBar, setChartDataBar] = useState({
    labels: CRM_FAKE_DATA[0].leads.map(lead => lead.nombre),
    datasets: [
      {
        data: CRM_FAKE_DATA[0].leads.map(lead => lead.valorDeVida),
        label: "Participación",
        backgroundColor: ["#ff6384"],
        borderColor: "#ff6384",
        borderWidth: 2,
      },
    ],
  });
  return {
    chartDataLine,
    chartDataBar,
  };
};
