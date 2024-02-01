//Este hook me permite crear un estado modificable en mi componente
import { useState } from "react";

const Contador = () => {
  //el inicio del ciclo de vida, el codigo que yo implemente se ejecutará primero
  // let numero = 1;
  //const [nombreEstado💡, funciónQueActualizaElEstado🎛️] = useState(valorInicial)
  const [numero, setNumero] = useState(1)
  console.log(numero);

  const updateNumero = () => {
    console.log("estoy dentro de la F updateNumero")
    // numero++;
    setNumero(numero+1)
  }

  return (
    <div>
      {console.log("Estoy dentro de el JSX")}
      Contador {numero}
      {/* Eventos, <elemento onEvento={funcion a Ejecutar} */}
      <button onClick={updateNumero}>Click</button>
    </div>
  )
}

export default Contador;