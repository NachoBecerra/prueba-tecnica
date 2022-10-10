import { DeleteForever } from "@mui/icons-material";
import { Button, FormControl, Grid, Typography } from "@mui/material";

export const SalaView = () => {
  return (
    <Grid
      item
      sx={{
        backgroundColor: "#F5F7FB",
        borderRadius: "26px",
        minWidth: "250px",
        p: 3,
        m: 1,
      }}
    >
      <Grid container sx={{justifyContent: "space-between"}}>
        <Typography sx={{ fontWeight: 600 }}>Sala 1</Typography>
        <DeleteForever sx={{cursor:"pointer", color: "#c80c0c"}}/>

      </Grid>
      <Grid container>
        <FormControl>
          <Typography sx={{ fontSize: 12, fontWeight: 600, mt: 3 }}>
            Capacidad máxima
          </Typography>
          <input type="number" min="0" value="30" />
          <Typography sx={{ fontSize: 12, fontWeight: 600, mt: 2 }}>
            Ocupación
          </Typography>
          <input type="number" max="100" min="0" value="40" />
          <Grid container sx={{ mt: 3, justifyContent: "right" }}>
            <Button id="Button"> Modificar</Button>
          </Grid>
        </FormControl>
      </Grid>
    </Grid>
  );
};
