import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Grid, Typography } from "@mui/material";
import { startNewSala } from "../../store/app";
import { SalaView, SinPlantaSeleccionada, PantallaCarga } from "./";
import { styleListadoSalas } from "../styles";

export const ListadoSalas = () => {
  const { active, isSaving } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const newSala = () => {
    dispatch(startNewSala());
  };

  if (active === null) return <SinPlantaSeleccionada />;

  return (
    <Box>
      <Grid
        container
        className="animate__animated animate__fadeIn"  
        sx={styleListadoSalas}
      >
        <Typography fontWeight={600}>{active.nombre}</Typography>
        <Button id="Button" onClick={newSala}>
          Añadir sala
        </Button>
        {isSaving ? (
          <PantallaCarga />
        ) : (
          <Grid
            container
            sx={{ mt: 3, justifyContent: { xs: "center", md: "left" } }}
          >
            {active.salas.map((n) => (
              <SalaView key={n.id} sala={n}/>
            ))}
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
