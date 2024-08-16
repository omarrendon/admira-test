import { Bar } from "react-chartjs-2";

interface Props {
  name: string;
  data: any;
}

export const BarChart = ({ name, data }: Props) => {
  return (
    <Bar
      data={data}
      options={{
        plugins: {
          title: {
            display: true,
            text: name,
          },
        },
      }}
    />
  );
};
