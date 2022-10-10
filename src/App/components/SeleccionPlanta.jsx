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

export const SeleccionPlanta = () => {
  return (
      <Box>
        <Grid container>
          <Grid item>
            <Typography variant="h3" sx={{ fontWeight: 700, p:1 }}>
              Salas
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <FormControl sx={{ m: 1, minWidth: 210}} size="small">
              <InputLabel id="demo-select-small">
                Selecciona una planta
              </InputLabel>
              <Select
                value=""
                label="Selecciona una planta"
                sx={{borderRadius: "12px"}}
              >
                <MenuItem value={1}>Planta 1</MenuItem>
                <MenuItem value={2}>Planta 2</MenuItem>
                <MenuItem value={3}>Planta 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Divider sx={{ opacity: 0.4, mt:1}}/>
      </Box>
  )
}
