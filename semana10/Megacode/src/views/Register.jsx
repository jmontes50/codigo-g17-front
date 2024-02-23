import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { ToastContainer, toast } from 'react-toastify';
import Container from "../components/Container";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const startRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
    } catch (error) {
      console.log("Error", error);
      throw error
    }
  };

  const handleRegister = () => {
    toast.promise(startRegister(), {
      pending: 'Registrando usuario...',
      success: 'Usuario registrado! 👍',
      error: 'Error al registrar usuario 🤯'
    })
  }

  return (
    <Container>
      <div className="lg:w-2/6 md:w-1/2 bg-gray-400 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-8 md:mt-10 mx-auto">
        <h2 className="text-dark text-lg font-medium title-font mb-5">
          Registrate
        </h2>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-700">
            Correo electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white focus:ring-2 focus:ring-blue-600 rounded border border-gray-600 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ej. name@gmail.com"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full bg-white focus:ring-2 focus:ring-blue-700 rounded border border-gray-600 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ej. 21fc3c21bjn@"
          />
        </div>
        <button
          className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
          onClick={handleRegister}
        >
          Registrarse
        </button>
        <p className="text-xs mt-3">
          *La contraseña debe ser de al menos 6 caracteres.
        </p>
      </div>
      {/* Toast */}
      <ToastContainer />
    </Container>
  );
}
