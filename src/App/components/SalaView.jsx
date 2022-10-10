import { DeleteForever } from "@mui/icons-material";
import { Button, FormControl, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export const SalaView = ({sala}) => {
   const handleChange = () => {};
   const setSala = () => {};
  
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
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Typography sx={{ fontWeight: 600 }}>{sala.nombre}</Typography>
            <DeleteForever sx={{ cursor: "pointer", color: "#c80c0c" }} />
          </Grid>
          <Grid container>
            <FormControl>
              <Typography sx={{ fontSize: 12, fontWeight: 600, mt: 3 }}>
                Capacidad máxima
              </Typography>
              <input type="number" min="0" value={sala.maxCapacidad} onChange={handleChange} />
              <Typography sx={{ fontSize: 12, fontWeight: 600, mt: 2 }}>
                Ocupación
              </Typography>
              <input
                type="number"
                max="100"
                min="0"
                value={sala.ocupacion}
                onChange={handleChange}
              />
              <span className="porcentaje">%</span>
              <Grid container sx={{ mt: 3, justifyContent: "right" }}>
                <Button id="Button" onSubmit={setSala}>
                  Modificar
                </Button>
              </Grid>
            </FormControl>
          </Grid>
        </Grid>
  )

};
