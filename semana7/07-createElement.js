//Ya tengo un elemento existente
let mainRaiz = document.getElementById("raiz");
console.log(mainRaiz)
//hemos creado un nuevo Elemento con createElement
let miHeader = document.createElement("header");
console.log("miHeader", miHeader)
// miHeader.innerHTML = "Cabecera";
let titulo = document.createElement("h1");
titulo.innerHTML = "Cabecera";

miHeader.appendChild(titulo)
//appendChild voy a poder añadir como un elemento Hijo otro elemento
mainRaiz.appendChild(miHeader);
miHeader.style.color = "blue";

let nav = document.createElement("nav");
let ul = document.createElement("ul");
ul.style.backgroundColor = "steelblue";
ul.setAttribute("data-list","listaNavegacion")

let li1 = document.createElement("li");
li1.innerText = "Inicio";
let li2 = document.createElement("li");
li2.innerText = "Nosotros";
let li3 = document.createElement("li");
li3.innerText = "Galería";
let li4 = document.createElement("li");
li4.innerText = "Contacto";

mainRaiz.appendChild(nav);
nav.appendChild(ul);
//append me va a permitir agregar varios elementos según el orden que yo ponga los elementos como argumentos
ul.append(li1, li2, li3, li4);

let imagen = document.createElement("img");
imagen.setAttribute("src","https://www.guru99.com/images/how-to-use-dom-and-events-in-javascript.png");
imagen.setAttribute("alt","representación del dom")
mainRaiz.appendChild(imagen)

//VENTAJAS
/** No necesito pensar si algo ya esta existe dentro del document
 * ya es un objeto Element no espero a que se cree y ya
 * DESVENTAJAS
 * es más abstracto
 */

let sectionPrecios = document.createElement("section");

sectionPrecios.innerHTML = `
    <h2>Nuestros Precios</h2>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, pariatur.
    </p>
    <img src="https://images.unsplash.com/file-1695862006750-2a3aca1bfdfaimage?dpr=2&w=416&auto=format&fit=crop&q=60" alt="laptop con precios" />
    <button id="btn">Click!</button>

`
// console.log(sectionPrecios)
let botonPrecios = sectionPrecios.querySelector("#btn");
botonPrecios.addEventListener("click", function(){
    alert("Disfruta nuestros precios!!!!");
})
mainRaiz.appendChild(sectionPrecios);
