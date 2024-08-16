import { Box, Grid } from "@mui/material";
import { DashboarLayout } from "../layout/DashboarLayout";

import { useAnalytics } from "../hooks";
import { LineChart } from "../components";

export const AnalyticsPage = () => {
  const { chartData } = useAnalytics();
  return (
    <DashboarLayout namePage="Google Analytics">
      <Box component={"div"} sx={{ m: 3, p: 2 }}>
        <Grid container spacing={2}>
          <LineChart data={chartData} name="Google Analytics" />
        </Grid>
      </Box>
    </DashboarLayout>
  );
};
