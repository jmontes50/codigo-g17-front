/**
 * 1. tener una referencia a los elementos a utilizar en el DOM/HTML
 * 2. utilizar propiedades, métodos(funciones) que me permitan alcanzar las funcionalidades que deseo
 * 3. divertirse
 */

let inputTarea = document.getElementById('idTarea');
let btnAgregar = document.querySelector('#btnAgregar');
let ulTareas = document.getElementById('tareas');

console.log("inputTarea", inputTarea);
console.log("btnAgregar", btnAgregar);

let arrTareas = [];

let header = document.querySelector('header');
// console.log(typeof header.innerHTML)

/**
 * Historias de usuario
 * Como usuario quiero que la aplicación me permita escribir una tarea para poder listarla.
 */

function generarHTMLTareas(tareas){
    let htmlTareas = "";
    //vamos a dibujar las tareas dentro del UL
    for(let i = 0; i < tareas.length; i++){
        // console.log(tareas[i]);
        htmlTareas = htmlTareas + `<li>${tareas[i]}</li>`;
    }
    return htmlTareas;
}

//elemento.addEventListener("nombredelevento", funcion)
btnAgregar.addEventListener("click", function(){
    // console.log(inputTarea.value)
    arrTareas.push(inputTarea.value);
    // console.log(arrTareas)
    // console.table(arrTareas)

    //VERSION 1
    /*
    let htmlTareas = "";
    //vamos a dibujar las tareas dentro del UL
    for(let i = 0; i < arrTareas.length; i++){
        // console.log(arrTareas[i]);
        htmlTareas = htmlTareas + `<li>${arrTareas[i]}</li>`;
    }
    */
    //al tener el HTML en formato de string dentro de htmlTareas, podemos utilizarlo para agregarlo a la propiedad innerHTML de ulTareas
    
   //VERSION 2
    let htmlTareas = generarHTMLTareas(arrTareas)
    console.log(htmlTareas)
    ulTareas.innerHTML = htmlTareas;
    //limpiamos el value de input
    inputTarea.value = "";
});
