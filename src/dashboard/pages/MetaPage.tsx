import { Box, Grid } from "@mui/material";
import { DashboarLayout } from "../layout/DashboarLayout";

export const MetaPage = () => {
  return (
    <DashboarLayout namePage="META">
      <Box component={"div"} sx={{ mt: 5 }}>
        <Grid container spacing={2}></Grid>
      </Box>
    </DashboarLayout>
  );
};
