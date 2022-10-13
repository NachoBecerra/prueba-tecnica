import { createSlice } from '@reduxjs/toolkit'

const inicialState = {
    isSaving: false,
    messageSaved: '',
    plantas: [{
        id: 1,
        nombre: "Planta 1",
        salas: []
    }, {
        id: 2,
        nombre: "Planta 2",
        salas: []
    }],
    active: {
        id: "",
        nombre: "",
        salas: []
    },
}

export const appSlice = createSlice({
    name: 'app',
    initialState: inicialState,
    reducers: {
        isSaving: (state) => {
            state.isSaving = true
        },
        setActivePlanta: (state, action) => {
            state.active = action.payload
            state.isSaving = false
        },
        setNewSala: (state, action) => {
            state.plantas.map(planta => {
                if (planta.id === action.payload.idPlanta) {
                    state.active.salas.push(action.payload)
                }
            })
            state.isSaving = false
        },
        setUpdateSala: (state, action) => {
            state.active.salas.map(sala => {
                if (sala.id === action.payload.id) {
                    sala.nombre = action.payload.nombre
                    sala.maxCapacidad = action.payload.maxCapacidad
                    sala.ocupacion = action.payload.ocupacion
                }
            })
            state.isSaving = false
        },
        setDeleteSala: (state, action) => {
            state.active.salas = state.active.salas.filter(sala => sala.id !== action.payload.id)
            state.isSaving = false
        },
    }
})

export const { isSaving, setActivePlanta, setNewSala, setUpdateSala, setDeleteSala } = appSlice.actions