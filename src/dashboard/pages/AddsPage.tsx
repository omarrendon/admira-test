import { Box, Grid } from "@mui/material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { DashboarLayout } from "../layout/DashboarLayout";
import { BarChart } from "../components";
import { useFetch } from "../hooks";
import { useAdds } from "../hooks/useAdds";
import { useEffect, useState } from "react";

export const AddsPage = () => {
  const { chartDataBar, errorFetching, errorMessage, isLoading } = useAdds();

  const handleErrorFetch = () => {
    Swal.fire("¡Error!", errorMessage, "error");
  };

  console.log({ isLoading });

  return (
    <>
      {errorFetching && handleErrorFetch()}
      <DashboarLayout namePage="Google Adds">
        <Box component={"div"} sx={{ mt: 5 }}>
          <Grid container spacing={2}>
            {Object.keys(chartDataBar).length > 0 && (
              <BarChart name="Rendimiento de campañas" data={chartDataBar} />
            )}
          </Grid>
        </Box>
      </DashboarLayout>
    </>
  );
};
