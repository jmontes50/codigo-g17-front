import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../views/Home"
import Contacto from "../views/Contacto"
import Detalles from "../views/Detalles"
import Navigate from "./Navigate"

export default function App() {
  return (
    <Router>
      <Navigate />
      <Routes>
        {/* vamos a poder definir cada una de nuestras rutas */}
        {/* Route va a recibir 02 props 
          path que sera la ruta despues del dominio de mi aplicación
          element, donde le indicaremos que componente/vista se va a visualizar
        */}
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* para indicar que por la ruta podemos recibir un parametro, 
        tenemos que indicar /:nombreparametro */}
        <Route path="/detalles/:id" element={<Detalles />} />
      </Routes>
    </Router>
  )
}

