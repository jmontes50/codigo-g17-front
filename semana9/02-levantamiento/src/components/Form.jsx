import { useState } from "react"

export default function Form() {
  const [nombre, setNombre] = useState("Jorge")
  console.log({ nombre })

//   const updateNombre = (evento) => {
//     console.log(evento)
//     setNombre(evento.target.value)
//   }

  return (
    <>
        <h3>Formulario</h3>
        <input
            type="text"
            // componentes controlados,
            //El value de todo input, select, 
            //debe estar amarrado a un estado
            placeholder="Tu nombre"
            value={nombre}
            onChange={(evento) => {
                setNombre(evento.target.value)
            }}
            // onChange={updateNombre}
        />
    </>
  )
}
