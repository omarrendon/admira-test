import { Line } from "react-chartjs-2";

interface Props {
  name: string;
  data: any;
}

export const LineChart = ({ name, data }: Props) => {
  return (
    <Line
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: { position: "top" },
          title: { text: name, display: true },
        },
      }}
    />
  );
};
