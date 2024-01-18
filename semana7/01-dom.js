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

/**función Callback, estamos pasando una función como parámetro */
itemsLista.forEach(function(item){
    console.log("LI - ", item)
    item.style.color = "steelblue";
    item.style.fontFamily = "Courier"
})

//Eventos
//para poder escuchar eventos vamos a necesitar:
//TODOS los elementos, sea un boton, div, input van a tener eventos

console.log("Listener", miBoton.addEventListener)

let miInput = document.getElementById('inputEmail');

console.log("inputEmail", miInput)
/**Si yo deseo interactuar con el HTML:
 * 1. voy a necesitar referencias, variables a los elementos
 * que esten presentes
 * 2. a partir de ahi puedo utilizar propiedades, métodos
 * ej. innerHTML, style.color, addEventListener
 * 3. según sea método o propiedad la puedo utilizar para agregar dinamismo a mi app
 */
/**elemento.addEventListener("nombreDelEvento", funcion) */
miBoton.addEventListener("click", function(){
    //alert abre un ventana con un mensaje
    // alert("Hiciste click en el botón")
    console.log("Hola!")
    console.log("input texto", miInput.value)
    //Todo input va a tener una propiedad que se llama value
    /**El método includes() determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo true o false según corresponda. */
    if(miInput.value.includes(".com")){
        console.log("Existeeee!!!")
    }else{
        console.log("No hayyyyyyyyy")
    }
    //toggle es como un interruptor
    //si una clase esta dentro de un elemento, la remueve
    //si la clase no esta dentro del elemento, la agrega
    miInput.classList.toggle("input-class")
})

let img = document.querySelector('#imagen');

console.log(img.getAttribute("src"))
//setAttribute recibe dos parámetros
img.setAttribute("src", "https://images.unsplash.com/photo-1616011224441-f652db413327?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtaW9uZXN8ZW58MHx8MHx8fDA%3D")

img.setAttribute("alt", "Camión San Patricio")

let partners = document.querySelector(".partners");

console.log("Partners", partners)

partners.classList.add("importante");

let noticias = document.getElementById("idNoticias");

noticias.classList.remove("noticias")