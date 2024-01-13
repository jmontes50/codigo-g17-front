// var edad = 20;
// var edad = 25;
// let edad = 20;
// let edad = 25;
// console.log(edad)

/**
 * Dado un arreglo de números enteros, calcular 
 * la cantidad de números pares y la suma de los 
 * números impares
 */

let numeros = [9, 20, 7, 100, 201, 3, 7, 9, 25, 40];

let cantidadPar = 0;
let sumaImpares = 0;

for(let i = 0; i < numeros.length; i++){
    //% para operaciones me da el residuo
    if(numeros[i] % 2 === 0){
        //cantidadPar = cantidadPar + 1;
        cantidadPar++;
    }else{
        // sumaImpares = sumaImpares + numeros[i]
        sumaImpares += numeros[i]
    }
}

console.log("cantidad pares: ", cantidadPar)
console.log("suma impares: ", sumaImpares)