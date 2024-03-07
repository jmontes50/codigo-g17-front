import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const addMessage = async ({ uid, name, message, photo }) => {
  try {
    // addDoc me permite crear un documento como lo hicimos con setDoc pero la dif, es que aquí se me genera el id en firebase automaticamente
    const docRef = await addDoc(collection(db, "chats"), {
      // uid: uid,
      uid,
      name,
      message,
      photo
    });
    return docRef;
  } catch (error) {
    throw error;
  }
};

export { addMessage };
