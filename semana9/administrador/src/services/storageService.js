import { v4 as uuidv4 } from "uuid";
import { storage } from "../config/firebase";
//ref es una función que me va a permitir indicar la ruta del archivo a guardar
//uploadBytes es una función que me permite subir un archivo a firebase
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const uploadFile = (imagen, nombreCarpeta) => {
    return new Promise ((resolve, reject) => {
        const nombreSeparado = imagen.name.split(".");
        const extension = nombreSeparado[nombreSeparado.length - 1];
        const rutaCompleta = `${nombreCarpeta}/${uuidv4()}.${extension}`;
        //ref me permite saber donde y con que nombre o ruta
        const storageRef = ref(storage, `${rutaCompleta}`);

        uploadBytes(storageRef, imagen)
        .then(() => {
            return getDownloadURL(storageRef)
        })
        .then((url) => {
            resolve(url)
        })
        .catch((error) => {
            reject(error)
        })
    })
    
}

export {
    uploadFile
}

