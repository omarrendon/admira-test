import { Line } from "react-chartjs-2";

interface Props {
  name: string;
  data: any;
}

export const MixedChart = ({ data, name }: Props) => {
  return (
    <Line
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: { position: "top" },
          title: { text: name, display: true },
        },
        scales: {
          y: {
            type: "linear",
            display: true,
            position: "left",
            ticks: {
              color: "rgba(0, 0, 0, 1)",
            },
            grid: {
              // drawBorder: true,
              drawTicks: true,
              color: "rgba(0, 0, 0, 0.2)",
            },
            title: {
              display: true,
              text: "Line Title",
              font: {
                size: 17,
              },
            },
          },
          y1: {
            type: "linear",
            display: true,
            position: "right",
            title: {
              display: true,
              text: "Bar Title",
              font: {
                size: 15,
              },
            },
          },
        },
      }}
    />
  );
};
