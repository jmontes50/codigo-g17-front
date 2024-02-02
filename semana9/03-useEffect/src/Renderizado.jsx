import { useState } from "react";

export default function Renderizado() {
  const [cargando, setCargando] = useState(true);
  //operador ternario, es como un if corto
  //expresion a evaluar ? valorSiEsVerdadero : "valorSiEsFalso"
  //10 > 5 ? "verdadero" : "falso"
  const paises = ["Perú","Chile","Colombia"];

  const postresPeruanos = [
    {
      id: 1,
      nombre: "Suspiro a la Limeña",
      descripcion: "Dulce cremoso con merengue, decorado con canela",
    },
    {
      id: 2,
      nombre: "Mazamorra Morada",
      descripcion: "Postre a base de maíz morado, frutas y camote",
    },
    {
      id: 3,
      nombre: "Picarones",
      descripcion: "Masitas fritas de harina de trigo y camote, bañadas en miel de chancaca",
    }
  ];

  return (
    <>
      {/* renderizado condicional */}
      {cargando ? <p>Espere por favor..</p> : <p>Proceso terminado</p>}
      <button onClick={() => {setCargando(!cargando)}}>
        Cambiar
      </button>
      <hr />
      <ul>
        {/* renderizado de listas */}
      {paises.map((pais, indice) => (<li key={indice}>{pais}</li>))}
      </ul>
      <hr />
      <h2>Postres</h2>
      {postresPeruanos.map((item) => (
      <div key={item.id}>
        <h3>{item.nombre}</h3>
        <p>{item.descripcion}</p>
      </div>))}
    </>
  );
}
