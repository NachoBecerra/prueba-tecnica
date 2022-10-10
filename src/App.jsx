import { Box } from "@mui/material";
import { SeleccionPlanta, ListadoSalas } from "./App/components";

export const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <SeleccionPlanta />
        <ListadoSalas />
      </Box>
    </Box>
  );
};
