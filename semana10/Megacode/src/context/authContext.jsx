import { createContext, useState, useEffect } from "react";
import { auth } from "../config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
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