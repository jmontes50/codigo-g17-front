import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";

const provider = new GoogleAuthProvider();

const createUser = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    //después que he registrado mi usuario, vamos a guardar su info en la DB
    console.log(result.user);

    const user = {
      email: result.user.email,
      name: result.user.displayName,
      online: true,
    };
    //después que se crea el usuario en el módulo de autenticación, utilizamos sus datos para crear un nuevo documento con su UID como ID del documento en la DB de firestore
    await setDoc(doc(db, "users", result.user.uid), user)

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { createUser };
