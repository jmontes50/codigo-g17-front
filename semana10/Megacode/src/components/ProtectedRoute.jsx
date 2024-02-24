import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export default function ProtectedRoute({ children }) {

  const { user } = useContext(AuthContext);

  console.log("ProtectedRoute", user)

  if(user){
    //si estoy logueado me devolverla el JSX (html, componente) que este dentro de ProtectedRoute
    return children;
  }else{
    //si no estoy logueado me devuelvo a la pagina de login, gracias al componente Navigate
    return <Navigate to="/login" />;
  }
}
