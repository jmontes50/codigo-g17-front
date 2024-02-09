import { v4 as uuidv4 } from "uuid";
import { storage } from "../config/firebase";
//ref es una función que me va a permitir indicar la ruta del archivo a guardar
//uploadBytes es una función que me permite subir un archivo a firebase
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const uploadFile = (imagen, nombreCarpeta) => {
    return new Promise ((resolve, reject) => {
        //En caso yo no ponga una imagen, me va a devolver una imagen por defecto
        if(!imagen){
            resolve("https://loremflickr.com/640/480/clothes")
        }
        // en caso de que si ponga una imagen, me va a devolver la ruta de la imagen ya subida a Firebase
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

