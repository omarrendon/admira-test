import {
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { DashboarLayout } from "../layout/DashboarLayout";
import { BarChart } from "../components";
import { useAdds } from "../hooks/useAdds";

export const AddsPage = () => {
  const { chartDataBar, errorFetching, errorMessage, isLoading } = useAdds();

  const handleErrorFetch = () => {
    Swal.fire("¡Error!", errorMessage, "error");
  };

  return (
    <>
      {errorFetching && handleErrorFetch()}
      <DashboarLayout namePage="Google Adds">
        <Box component={"div"} sx={{ mt: 5 }}>
          {Object.keys(chartDataBar).length > 0 && !isLoading ? (
            <Grid container spacing={2}>
              <BarChart name="Rendimiento de campañas" data={chartDataBar} />
            </Grid>
          ) : (
            <>
              <Dialog open={isLoading} component={"div"} sx={{ m: 5 }}>
                <DialogContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    ml: 7,
                    mt: 5,
                  }}
                >
                  <CircularProgress color="primary" size={50} />
                </DialogContent>
                <DialogTitle sx={{ m: 3 }}>Cargando...</DialogTitle>
              </Dialog>
            </>
          )}
        </Box>
      </DashboarLayout>
    </>
  );
};
