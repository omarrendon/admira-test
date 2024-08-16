import { Box, Grid } from "@mui/material";
import { DashboarLayout } from "../layout/DashboarLayout";
import { BarChart, LineChart } from "../components";
import { useCRM } from "../hooks";

export const CRMPage = () => {
  const { chartDataLine, chartDataBar } = useCRM();
  return (
    <DashboarLayout namePage="CRM">
      <Box component={"div"} sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <BarChart data={chartDataBar} name="CRM Participación " />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <LineChart data={chartDataLine} name="CRM Gastos Publicitarios" />
          </Grid>
        </Grid>
      </Box>
    </DashboarLayout>
  );
};
