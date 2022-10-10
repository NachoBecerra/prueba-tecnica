import { createSlice } from '@reduxjs/toolkit'

const inicialState = {
    isSaving: false,
      messageSaved: '',
      plantas: [{
        id: 1,
        nombre: "Planta 1",
        salas: [{
            id: 1,
            nombre: "Sala 1",
            maxCapacidad: 30,
            ocupacion:40,
        },{
            id: 2,
            nombre: "Sala 2",
            maxCapacidad: 50,
            ocupacion:20, 
        }]
      },{
        id: 2,
        nombre: "Planta 2",
        salas: [{
            id: 1,
            nombre: "Sala 1",
            maxCapacidad: 60,
            ocupacion:10,
        },{
            id: 2,
            nombre: "Sala 2",
            maxCapacidad: 20,
            ocupacion:60, 
        }]
      }],
      active: null,

}

export const appSlice = createSlice({
    name: 'app',
    initialState: inicialState,
    reducers: {
        isSaving: (state) =>{
            state.isSaving = true
        },
        setActivePlanta: (state, action) =>{
            state.active = action.payload
            state.isSaving = false
        },  
    }
})

export const { isSaving, setActivePlanta } = appSlice.actions