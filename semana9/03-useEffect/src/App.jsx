import { useState, useEffect } from "react"
import Renderizado from "./Renderizado"

export default function App() {
  const [contador, setContador] = useState(0)
  const [foco, setFoco] = useState(true)

  const verifyFoco = () => {
    if(foco){
      return "💡"
    }else{
      return "📴"
    }
  }

  //1. tiene que estar al final antes del return
  //useEffect(() => {}, filtro), escuchar cambios de props o estado y cuando los haya ejecuta el código de la función que recibe
  //se ejecuta por defecto al montarse el componente
  useEffect(() => {
    console.log("cambio!!!", foco)
  }, [contador])

  useEffect(() => {
    console.log("Focoooo", foco)
  }, [foco])

  useEffect(() => {
    console.log("solo una vez!!")
    //Peticiones :D
    setContador(1000)
  },[])

  return (
    <>
      <div>{contador}</div>
      <div>{verifyFoco()}</div>
      <button onClick={() => {setContador(contador + 1)}}>
        Incrementar contador
      </button>
      <button onClick={() => {setFoco(!foco)}}>
        Interruptor 👍
      </button>
      {/* Este componente es muy útil, revisenlo */}
      <Renderizado />
    </>
  )
}
