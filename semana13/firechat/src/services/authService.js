import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/config";

const provider = new GoogleAuthProvider();

const createUser = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

export {
    createUser
}