//primero librerias
import { useState } from "react"
//componentes y demás
import Form from "./components/Form"
import Report from "./components/Report"

export default function App() {
  const [nombre, setNombre] = useState("Shrek");
  return (
    <>
      <h1>App Component</h1>
      //form que maneje los input
      <Form nombre={nombre} setNombre={setNombre} />
      //reporte muestre esos datos
      <Report nombre={nombre}/>
    </>
  )
}
