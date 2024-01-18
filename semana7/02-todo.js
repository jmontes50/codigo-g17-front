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
//elemento.addEventListener("nombredelevento", funcion)
btnAgregar.addEventListener("click", function(){
    // console.log(inputTarea.value)
    arrTareas.push(inputTarea.value);
    // console.log(arrTareas)
    // console.table(arrTareas)
    let htmlTareas = "";
    //vamos a dibujar las tareas dentro del UL
    for(let i = 0; i < arrTareas.length; i++){
        // console.log(arrTareas[i]);
        htmlTareas = htmlTareas + `<li>${arrTareas[i]}</li>`;
    }
    //al tener el HTML en formato de string dentro de htmlTareas, podemos utilizarlo para agregarlo a la propiedad innerHTML de ulTareas
    ulTareas.innerHTML = htmlTareas;
    //limpiamos el value de input
    inputTarea.value = "";
});