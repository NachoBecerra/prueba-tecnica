import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { DeleteForever } from "@mui/icons-material";
import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import { startDeleteSala, startUpdateSala } from "../../store/app";
import { postAPI } from "../../mochaAPI/config";
import { useState } from "react";
import { styleSalaView, styleModal } from "../styles";

export const SalaView = ({ sala }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const deleteSala = () => {
    dispatch(startDeleteSala(sala.id));
  };

  const updateSala = (values) => {
    postAPI(values);
    dispatch(startUpdateSala(values));
  };

  return (
    <Grid item className="animate__animated animate__fadeIn" sx={styleSalaView}>
      <Formik
        initialValues={{
          id: sala.id,
          nombre: sala.nombre,
          maxCapacidad: sala.maxCapacidad,
          ocupacion: sala.ocupacion,
        }}
        onSubmit={(values) => updateSala(values)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid item>
              <input
                className="nombre"
                type="text"
                name="nombre"
                width="10px"
                onChange={handleChange}
                value={values.nombre}
              />
              <DeleteForever
                onClick={handleOpen}
                sx={{ cursor: "pointer", color: "#c80c0c" }}
              />
            </Grid>
            <Typography sx={{ fontSize: 12, fontWeight: 600, mt: 3 }}>
              Capacidad máxima
            </Typography>
            <input
              type="number"
              name="maxCapacidad"
              min="0"
              onChange={handleChange}
              value={values.maxCapacidad}
            />
            <Typography sx={{ fontSize: 12, fontWeight: 600, mt: 2 }}>
              Ocupación
            </Typography>
            <input
              type="number"
              name="ocupacion"
              max="100"
              min="0"
              onChange={handleChange}
              value={values.ocupacion}
            />
            <span className="porcentaje">%</span>
            <Grid container sx={{ mt: 3, justifyContent: "right" }}>
              <Button id="Button" type="submit">
                Modificar
              </Button>
            </Grid>
          </form>
        )}
      </Formik>

      <Modal open={open} onClose={handleClose}>
        <Box sx={styleModal}>
          <Grid container sx={{ justifyContent: "center" }}>
            <Typography sx={{ fontWeight: 600 }}>
              La sala será eliminada
            </Typography>
          </Grid>
          <Grid container sx={{ justifyContent: "center" }}>
            <Typography>¿Quieres continuar?</Typography>
          </Grid>
          <Grid container sx={{ justifyContent: "center" }}>
            <Button id="botonModal" onClick={deleteSala}>
              Eliminar
            </Button>
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
};
