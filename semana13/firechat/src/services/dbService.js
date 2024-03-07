import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const addMessage = async ({uid, name, message}) => {
  try {
    const docRef = await addDoc(collection(db, "chats"), {
      // uid: uid,
      uid,
      name,
      message
    });
    return docRef;
  } catch (error) {
    throw error;
  }
};

export { addMessage };
