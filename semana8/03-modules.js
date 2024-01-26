//import { nombre } from "laUbicacion"
import {
  suma,
  resta,
  multiplicación,
  PI,
  otrosDatos,
  nombre,
//   alias utilizar as
  funcSaludarAPartirDeUnNombre as saludar,
} from "./moduloSuma.js";
//Cuando es por defecto no tengo que usar esas llaves
// import validarTipo from "./moduloTipado.js";
//Otra ventaja de que sea por defecto es que puedo cambiarle el nombre
import esTipo from "./moduloTipado.js";

const resSuma = suma(10, 20);
const resResta = resta(10, 20);
const resMultiplicacion = multiplicación(10, 20);

console.log("Validación", esTipo(50, "number"));

const root = document.getElementById("root");

root.innerHTML = `<h1>La suma es ${resSuma}</h1>`;

console.log({ resResta, resMultiplicacion, PI, otrosDatos, nombre });

console.log(saludar("Mariana"));
