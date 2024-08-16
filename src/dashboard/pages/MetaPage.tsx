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
import { PieChart } from "../components";
import { useMeta } from "../hooks/useMeta";
import { useMetaGender } from "../hooks/useMetaGender";

export const MetaPage = () => {
  const { errorFetching, errorMessage, isLoading, pieAgeChart } = useMeta();
  const { pieGenderChart } = useMetaGender();

  const handleErrorFetch = () => {
    Swal.fire("¡Error!", errorMessage, "error");
  };

  return (
    <>
      {errorFetching && handleErrorFetch()}
      <DashboarLayout namePage="META">
        <Box component={"div"} sx={{ mt: 5 }}>
          {Object.keys(pieAgeChart).length > 0 && !isLoading ? (
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6}>
                <PieChart
                  data={pieAgeChart}
                  name="Distribuciones demográficas - RANGO DE EDADES"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <PieChart
                  data={pieGenderChart}
                  name="Distribuciones demográficas - GENERO"
                />
              </Grid>
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
