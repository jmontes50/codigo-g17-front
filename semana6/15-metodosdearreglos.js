let gato = {
    nombre:"Michi",
    edad:3
}

console.log(gato.nombre)
console.log(gato.edad)

let bebidas = ["Agua","Inka Cola","Chicha Morada","Emoliente","Kola Escosesa"];

// let bebidas = {
//     length:5,
// }
console.log(bebidas)
console.log(bebidas.length)

//TODO ES UN OBJETO
//También aplica a numeros, strings, arrays
//Cuando definimos variables, se envuelven y se construyen en base a prototipos
//Un prototipo es como una plantilla de la que a partir se construye las estructuras de datos que estamos estamos utilizando

//MÉTODOS DE ARREGLOS
//Push me permite añadir items nuevos al final de un arreglo
bebidas.push("Limonada");
bebidas.push("Mojito");
console.log("push ", bebidas)

//pop
bebidas.pop()
console.log("pop ", bebidas)

//shift
bebidas.shift()
console.log("shift ", bebidas)

//forEach
//recibira una función y la ejecutará por cada item que encuentre en el arreglo
bebidas.forEach(function (bebida) {
    console.log("Hola ", bebida)
})

//Map
//Crea un arreglo a partir de otro, transforma un arreglo
//Va a recibir una función, la ejecutará por cada item y adicionalmente creará un nuevo arreglo a partir del return de esa función que le hemos dado como parámetro al map
let pedidos = bebidas.map(function (bebida){
    return `Deseo ordenar una ${bebida}`
})
console.log("Map ", pedidos)

let edades = [33, 54, 30, 33, 27, 40]

//Filter
//Filtrar, recibira una función y puedo retornar una expresión booleana, esa expresión booleana se aplicará a cada elemento y retornará solo los que sean *true*
let lasRodillasNosDuelen = edades.filter(function(edad) {
    return edad > 29
})

console.log("Filter ", lasRodillasNosDuelen)

//["Agua","Inka Cola","Chicha Morada","Emoliente","Kola Escosesa"];
//Splice
//Me permite eliminar 01 o varios elementos de un arreglo
//va a recibir 02 parámetros, la posición de referencia y la cantidad de items a eliminar
console.log("Antes de splice ", bebidas)
bebidas.splice(2, 1);
console.log("Después de splice ", bebidas)

//Reduce
//Me va a permitir agrupar elementos a partir de un arreglo

let sumaEdades = edades.reduce(function(acumulador, item){
    return acumulador + item
})
console.log("Reduce ", sumaEdades)

//Va a ver métodos que me modifican mi arreglo original
// push, pop, shift, splice

//pero otros que no y que me retornar algo a partir de mi arreglo original
//filter, map