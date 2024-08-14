import { Box, Grid } from "@mui/material";
import { DashboarLayout } from "../layout/DashboarLayout";
import { Line } from "react-chartjs-2";

import { useAnalytics } from "../hooks";

export const AnalyticsPage = () => {
  const { chartData } = useAnalytics();
  return (
    <DashboarLayout>
      <Box component={"div"} sx={{ m: 3, p: 2 }}>
        <Grid container spacing={2}>
          <Line
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
                title: { text: "Google Analytics", display: true },
              },
            }}
          />
        </Grid>
      </Box>
    </DashboarLayout>
  );
};
