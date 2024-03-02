// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEWIqgy9x9PleuByu9w-R77AYqsdlWzzM",
  authDomain: "firechat-7c1ce.firebaseapp.com",
  projectId: "firechat-7c1ce",
  storageBucket: "firechat-7c1ce.appspot.com",
  messagingSenderId: "386748950558",
  appId: "1:386748950558:web:572fb66585c1c77100a60f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {
    auth,
    db
}