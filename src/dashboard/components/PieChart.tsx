import { Pie } from "react-chartjs-2";

interface Props {
  name: string;
  data: any;
}

export const PieChart = ({ name, data }: Props) => {
  return (
    <Pie
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
