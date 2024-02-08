import { storage } from "../config/firebase";
//ref es una función que me va a permitir indicar la ruta del archivo a guardar
//uploadBytes es una función que me permite subir un archivo a firebase
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const uploadFile = (imagen, nombreCarpeta) => {
    return new Promise ((resolve, reject) => {
        //ref me permite saber donde y con que nombre o ruta
        const storageRef = ref(storage, `${nombreCarpeta}/${imagen.name}`);

        uploadBytes(storageRef, imagen).then((snapshot) => {
            console.log("Exitooooo al subir imagen")
        })
    })
    
}

export {
    uploadFile
}

