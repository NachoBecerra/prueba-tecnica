import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyAtjkgBWap0d6fFc6C600bKSMr2ChixFSo",
    authDomain: "alvatross-59561.firebaseapp.com",
    projectId: "alvatross-59561",
    storageBucket: "alvatross-59561.appspot.com",
    messagingSenderId: "1016406593783",
    appId: "1:1016406593783:web:951b31d8093570072d83f2",
    measurementId: "G-FC9S2RN8PQ"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseDB = getFirestore(FirebaseApp)