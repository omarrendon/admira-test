import { Box, Grid } from "@mui/material";
import { DashboarLayout } from "../layout/DashboarLayout";

export const CRMPage = () => {
  return (
    <DashboarLayout>
      <Box component={"div"} sx={{ m: 3, p: 2 }}>
        <Grid container spacing={2}>
          {/* <
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
                title: { text: "Google Analytics", display: true },
              },
            }}
          /> */}
        </Grid>
      </Box>
    </DashboarLayout>
  );
};
