import { Box } from "@mui/material";
import { SeleccionPlanta, ListadoSalas } from "./App/components";

export const App = () => {
  return (
    <Box sx={{ display: "flex", justifyContent:"center" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 2, maxWidth:1200 }}>
        <SeleccionPlanta />
        <ListadoSalas />
      </Box>
    </Box>
  );
};
