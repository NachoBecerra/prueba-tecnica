import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { startNewSala } from "../../store/app";
import { SalaView, SinPlantaSeleccionada, PantallaCarga } from "./";
import { styleListadoSalas } from "../styles";
import { useOrden } from "../hooks/useOrden";

export const ListadoSalas = () => {
  const { active, isSaving } = useSelector((state) => state.app);
  const [orden, setOrden] = useState(1);
  const dispatch = useDispatch();
  const salasOrdenadas = useOrden(orden);

  if (active.nombre === "") return <SinPlantaSeleccionada />;

  const cambiarOrden = ({ target }) => {
    setOrden(target.value);
  };

  const newSala = () => {
    dispatch(startNewSala());
  };

  return (
    <Box>
      <Grid
        container
        className="animate__animated animate__fadeIn"
        sx={styleListadoSalas}
      >
        <Grid item>
          <Typography sx={{ fontWeight: 600, fontSize: 20 }}>
            {active.nombre}
          </Typography>
          <FormControl sx={{ minWidth: 180, mt: 1 }} size="small">
            <InputLabel>Ordenadas por</InputLabel>
            <Select
              id="orden"
              name="orden"
              value={orden}
              onChange={cambiarOrden}
              label="Ordenadas por"
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value={1}>Nombre de sala</MenuItem>
              <MenuItem value={2}>Capacidad máxima</MenuItem>
              <MenuItem value={3}>Ocupación</MenuItem>
            </Select>
          </FormControl>
        </Grid>
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
            {salasOrdenadas.map((n) => (
              <SalaView key={n.id} sala={n} />
            ))}
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
