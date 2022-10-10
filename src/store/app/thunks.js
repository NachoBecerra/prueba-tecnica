import { isSaving, setActivePlanta } from "./appSlice"

export const startSetPlanta = (planta) => {
    return (dispatch, getState) =>{
        
        dispatch(isSaving())

        const plan = getState().app.plantas
        
        let data
        plan.forEach(e => {
            if(e.id===planta) data={id:e.id,nombre:e.nombre,salas:e.salas}          
        });

        dispatch(setActivePlanta(data))
    }
}