import { SaveAltSharp } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { SalaView } from "./";

export const ListadoSalas = () => {

  const { active } = useSelector(state => state.app)

  if (active===null) return (
    <Grid
        container
        direction="row"
        justifyContent="space-between"
        border="1px solid #2E344D"
        borderRadius="26px"
        sx={{ mt: 2, p: 3 }}>
      Selecciona una Planta para comenzar
    </Grid>
  )

  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        border="1px solid #2E344D"
        borderRadius="26px"
        sx={{ mt: 2, p: 3 }}
      >
        <Typography fontWeight={600}>{active.nombre}</Typography>
        <Button id="Button">Añadir sala</Button>
        <Grid container sx={{ mt: 3, justifyContent: {xs: "center" , md: "left"} }}>
          { active.salas.map(n=><SalaView key={n.id} sala={n}/>)}
        </Grid>
      </Grid>
    </Box>
  );
};
