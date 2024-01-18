/**
 * 1. tener una referencia a los elementos a utilizar en el DOM/HTML
 * 2. utilizar propiedades, métodos(funciones) que me permitan alcanzar las funcionalidades que deseo
 * 3. divertirse
 */

let inputTarea = document.getElementById('idTarea');
let btnAgregar = document.querySelector('#btnAgregar');

console.log("inputTarea", inputTarea);
console.log("btnAgregar", btnAgregar);

let arrTareas = [];

/**
 * Historias de usuario
 * Como usuario quiero que la aplicación me permita escribir una tarea para poder listarla.
 */
//elemento.addEventListener("nombredelevento", funcion)
btnAgregar.addEventListener("click", function(){
    // console.log(inputTarea.value)
    arrTareas.push(inputTarea.value);
    // console.log(arrTareas)
    console.table(arrTareas)
})