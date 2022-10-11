import { collection, deleteDoc, doc, setDoc, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { isSaving, setActivePlanta, setDeleteSala, setNewSala, setUpdateSala } from "./"

export const startSetPlanta = (planta) => {
    return async (dispatch, getState) => {

        dispatch(isSaving())

        const plan = getState().app.plantas
        const collectionRef = collection(FirebaseDB, `app/planta${planta}/sala`)
        const docs = await getDocs(collectionRef)
        const salas = []
        docs.forEach(doc => {
            salas.push({ id: doc.id, ...doc.data() })
        })

        let data
        plan.forEach(e => {
            if (e.id === planta) data = { id: e.id, nombre: e.nombre, salas }
        });

        dispatch(setActivePlanta(data))
    }
}

export const startNewSala = () => {
    return async (dispatch, getState) => {

        dispatch(isSaving())

        const idPlanta = getState().app.active.id
        const data = {
            nombre: "Sala nueva",
            maxCapacidad: 100,
            ocupacion: 0,
            idPlanta
        }

        const newDoc = doc(collection(FirebaseDB, `app/planta${idPlanta}/sala`))
        await setDoc(newDoc, data)
        data.id = newDoc.id

        dispatch(setNewSala(data))
    }
}

export const startUpdateSala = (values) => {
    return async (dispatch, getState) => {

        dispatch(isSaving())
        const idPlanta = getState().app.active.id
        const docRef = doc(FirebaseDB, `app/planta${idPlanta}/sala/${values.id}`)
        await setDoc(docRef, values, { merge: true })

        dispatch(setUpdateSala(values))
    }
}

export const startDeleteSala = (id) => {
    return async (dispatch, getState) => {

        dispatch(isSaving())

        const idPlanta = getState().app.active.id
        const data = { id, idPlanta }
        const docRef = doc(FirebaseDB, `app/planta${idPlanta}/sala/${data.id}`)
        await deleteDoc(docRef)

        dispatch(setDeleteSala(data))
    }
}