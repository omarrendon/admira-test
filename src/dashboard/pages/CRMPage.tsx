import { Box, Grid } from "@mui/material";
import { DashboarLayout } from "../layout/DashboarLayout";
import { LineChart } from "../components";
import { useCRM } from "../hooks";

export const CRMPage = () => {
  const { chartDataLine } = useCRM();
  return (
    <DashboarLayout namePage="CRM">
      <Box component={"div"} sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <LineChart data={chartDataLine} name="CRM Gastos Publicitarios" />
        </Grid>
      </Box>
    </DashboarLayout>
  );
};
