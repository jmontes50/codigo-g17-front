console.log("Hola");

//API - Application Programming Interface
//Set de herramientas que me permiten conversar, dar instrucciones al navegador
//Auto, timón, los pedales, palanca de cambios
//seria la API del auto.

//document, es un objeto que representa mi documento HTML
const miBoton = document.getElementById("btn");

console.log("miBoton", miBoton)

miBoton.textContent = "Guardar!!";

/**
 * Si yo deseo interactuar con el DOM(HTML)
 * 1. voy a necesitar referencias
 * 1.1 getElementById(id de un elemento)
 * 1.2 querySelector(selector como si fuera de CSS)
 * Ej.: #nombreID .nombreClase nombreEtiqueta
 * Va a obtener el primer elemento que coincida
 * con el argumento dado
 */

console.log("Document", document.querySelector)

const miHeader = document.querySelector("header");

console.log("miheader", miHeader)

//el innerText es una propiedad que hace referencia al texto dentro de un elemento
//innerHTML hace referencia al HTML dentro de un elemento
miHeader.innerHTML = `
    <div>
        <h1>
            Document Object Model
        </h1>
    </div>
`;
/**
 * propiedades de ccs como color o padding que son 
 * de una sola palabra, se utilizan tal cual
 * propiedades de dos o más palabras usarán 
 * la sintaxis de camelCase ej.:
 * font-family será fontFamily
 */
miHeader.style.color = "blue";
miHeader.style.padding = "20px";
miHeader.style.backgroundColor = "peru";
miHeader.style.fontFamily = "Arial, sans-serif";
//Linter, ESlint, herramientas para tener el codigo bonito ordenado
//dinamismo
// miBoton.addEventListener("click", function(){
//     miHeader.style.backgroundColor = "red"
// })

/**
 * El selector querySelectorAll, me permite obtener una lista de nodos (elementos html) y a partir de ahi puedo iterar en esos elementos con métodos como forEach
 */

const itemsLista = document.querySelectorAll('.listItem');

console.log("itemsLista", itemsLista)

itemsLista.forEach(function(item){
    console.log("LI - ", item)
    item.style.color = "steelblue";
    item.style.fontFamily = "Courier"
})