import { createContext, useState, useEffect } from "react";
import { auth } from "../config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //el callback en onAuthStateChanged es una funcion que se ejecuta cuando el estado de autenticacion cambia.
    //el control de esta función lo tiene firebase, es un evento que se dispara gracias a trabajar con un observador
    onAuthStateChanged(auth, (userInfo) => {
      if(userInfo){
        console.log({ userInfo });
        setUser(userInfo);
      }else{
        setUser(null);
      }
    });
  }, []);

  return (<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>);
};

export { AuthContext, AuthContextProvider };