import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser, resetUser } from "./app/auth/authSlice";
import { auth } from "./firebase/config";
import Sign from "./views/Sign";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const infoUser = {
          name: user.displayName,
          logged: true,
          uid: user.uid,
          photo: user.photoURL,
        };
        dispatch(setUser(infoUser));
      }else{
        dispatch(resetUser());
      }
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Sign />} />
        </Routes>
      </Router>
    </>
  );
}
