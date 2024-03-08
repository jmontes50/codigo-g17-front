import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const addMessage = async ({ uid, name, message, photo }) => {
  //cada vez que se invoque addMessage se va a crear today, al darle new Date, representa la fecha y hora actual
  const today = new Date();
  try {
    // addDoc me permite crear un documento como lo hicimos con setDoc pero la dif, es que aquí se me genera el id en firebase automaticamente
    const docRef = await addDoc(collection(db, "chats"), {
      // uid: uid,
      uid,
      name,
      message,
      photo,
      timestamp: today.getTime(),
    });
    return docRef;
  } catch (error) {
    throw error;
  }
};

export { addMessage };
