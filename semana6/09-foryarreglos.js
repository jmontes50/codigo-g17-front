// for(let i = 0; i < 10; i++){
//     console.log(`el valor del inicializador es ${i}`)
// }

//un arreglo/array van a tener un indice o index que siempre comienza en 0
let frutas = ["Piña","Papaya","Kiwi"];

console.log(frutas[2]); 
console.log(frutas.length)

//recorrer un arreglo
/*
for(let i = 0; i < frutas.length; i++){
    console.log(`el valor de i es: ${i}`)
    console.log(`La fruta es: ${frutas[i]}`)
}
*/
// Recuerden i -- es lo mismo que i = i - 1
for(let i = frutas.length - 1; i >= 0; i--){
    console.log(`el valor de i es: ${i}`)
    console.log(`La fruta es: ${frutas[i]}`)
}
