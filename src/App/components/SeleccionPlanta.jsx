import {
  Box,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSetPlanta } from '../../store/app/thunks'

export const SeleccionPlanta = () => {
  const plantas = useSelector((state) => state.app.plantas);

  const [planta, setPlanta] = useState("");

  const dispatch = useDispatch()

  const handleChange = ({ target }) => {
    setPlanta(target.value);
    dispatch(startSetPlanta(target.value))
  };

  return (
    <Box>
      <Grid container>
        <Grid item>
          <Typography variant="h3" sx={{ fontWeight: 700, p: 1 }}>
            Salas
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
            <InputLabel id="demo-select-small">
              Selecciona una planta
            </InputLabel>
            <Select
              id="planta"
              name="planta"
              value={planta}
              onChange={handleChange}
              label="Selecciona una planta"
              sx={{ borderRadius: "12px" }}
            >
              {plantas.map((n) => (
                <MenuItem key={n.id} value={n.id}>
                  {n.nombre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Divider sx={{ opacity: 0.4, mt: 1 }} />
    </Box>
  );
};
