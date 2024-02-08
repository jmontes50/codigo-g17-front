// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF5-vC45G_u6JSSd9_H3GXgPFGyUjFLT0",
  authDomain: "g17front.firebaseapp.com",
  projectId: "g17front",
  storageBucket: "g17front.appspot.com",
  messagingSenderId: "733753383040",
  appId: "1:733753383040:web:6f8025a626e7571c956e65"
};

// Initialize Firebase
//Necesitamos una referencia a nuestra appweb que registramos en firebase
//para eso tenemos a initializeApp, mediante la configuración va a poder conocer
//a que servidor se va a conectar
const app = initializeApp(firebaseConfig);
//getStorage me permite mediante app, soloamente va a acceder al módulo de storage
const storage = getStorage(app);

export {
    storage
}