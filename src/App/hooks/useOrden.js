import { useSelector } from "react-redux"

export const useOrden = (value) => {
    const {salas} = useSelector(state => state.app.active)

    const salasOrdenadas = [].concat(salas)

    if(value===1){
      salasOrdenadas.sort((sala1, sala2)=>{
        if(sala1.nombre < sala2.nombre){
          return -1}
        if(sala1.nombre > sala2.nombre){
          return 1}
        return 0
      })
    }

    if(value===2){
      salasOrdenadas.sort((sala1, sala2)=>{
        if(sala1.maxCapacidad < sala2.maxCapacidad){
          return -1}
        if(sala1.maxCapacidad > sala2.maxCapacidad){
          return 1}
        return 0
      })
    }

    if(value===3){
      salasOrdenadas.sort((sala1, sala2)=>{
        if(sala1.ocupacion < sala2.ocupacion){
          return -1}
        if(sala1.ocupacion > sala2.ocupacion){
          return 1}
        return 0
      })
    }

  return salasOrdenadas
}
