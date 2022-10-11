import { CircularProgress, Grid } from "@mui/material";

export const PantallaCarga = () => {
  return (
    <Grid
      container
      direction="row"
      sx={{
        height: "350px",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <CircularProgress />
    </Grid>
  );
};
