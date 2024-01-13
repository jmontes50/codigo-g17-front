let oracion = " Mi Primera Chamba ";

console.log(oracion)
//esta manera de declarar un string es un poco diferente
let oracion2 = new String("me acuerdo del día...")

// console.log(oracion2 + "que de la chamba...")
//strings - cadenas de texto, son como arreglos de caracteres
console.log(oracion2)

console.log(oracion.toLowerCase()); //convierte a minúsculas

console.log(oracion.toUpperCase())//convierte a mayúsculas

console.log(oracion.trim()) //quita los espacios de los costados

console.log(oracion.charAt(5)) //me da la letra en la posición indicada

console.log(oracion.substring(1, 9)) //me da un texto segun la posición de inicio y final 

console.log(oracion.split(" ")) //segun el carácter o texto que le pase buscará dividir el texto en un arreglo separandolo por ese carácter

let textoSeparado = ["React","Angular","Vue"]

console.log(textoSeparado.join(" & ")) //a apartir de un arreglo une los items y me da un string