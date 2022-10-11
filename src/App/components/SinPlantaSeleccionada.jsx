import { Grid } from "@mui/material";
import { styleSinPlantaSelecc } from "../styles";

export const SinPlantaSeleccionada = () => {
  return (
    <Grid
    className="fontResponsive"
      container
      direction="row"
      justifyContent="space-between"
      border="1px solid #2E344D"
      borderRadius="26px"
      sx={styleSinPlantaSelecc}
    >
      Seleccione una planta para comenzar
    </Grid>
  );
};
