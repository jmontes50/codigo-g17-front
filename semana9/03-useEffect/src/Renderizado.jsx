import { useState } from "react";

export default function Renderizado() {
  const [cargando, setCargando] = useState(false);
  //operador ternario, es como un if corto
  //expresion a evaluar ? valorSiEsVerdadero : "valorSiEsFalso"
  //10 > 5 ? "verdadero" : "falso"
  return (
    <>
      {/* renderizado condicional */}
      {cargando ? <p>Espere por favor..</p> : <p>Proceso terminado</p>}
    </>
  );
}
