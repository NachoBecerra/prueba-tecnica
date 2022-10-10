import { Box, Button, Grid, Typography } from "@mui/material";
import { SalaView } from "./";

export const ListadoSalas = () => {
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
        <Typography fontWeight={600}>Planta 1</Typography>
        <Button id="Button">Añadir sala</Button>
        <Grid container sx={{ mt: 3, justifyContent: {xs: "center" , md: "left"} }}>
          <SalaView />
          <SalaView />
          <SalaView />
        </Grid>
      </Grid>
    </Box>
  );
};
