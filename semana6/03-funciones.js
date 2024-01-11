//Podemos pensar en una función como en una maquina
//que va a agrupar ciertas instrucciones

//Montar bicicleta es un conjunto de instrucciones
//Pero no pensamos en ese conjunto de instrucciones
//1. colocate al costado de la bicicleta estacionada
//2. sosten la bicicleta
//3. levanta la pierna cercana a la bicicleta
//4. pasa la pierna por encima de la bici
//5. por el pie en el pedal

//Una función nos va a permitir agrupar ciertas instrucciones

//calcular precio total
//function nombreDeLaFuncion(parámetros) {}
function calcularPrecioTotal(precio){
    let margenGanancia = 1.15;
    let igv = 1.18;
    let precioTotal = precio * margenGanancia * igv;
    console.log("precioTotal: ", precioTotal);
}
//llamo a la función por su nombre y de ser necesario le dare argumentos
//nombreFuncion(argumentos)
calcularPrecioTotal(100)

//Máquina
//varios parámetros, los separamos por ,
function calcularViaje(pasajes, estadia, comida){
    // console.log(comida);
    let precioTotal = pasajes + estadia + comida; 
    //Me permite retornar el resultado de algo
    //va a cortar la ejecución de mi función
    return precioTotal;
    // console.log("Hola")
}

let resultado = calcularViaje(100, 50, 45);
console.log("resultado: ", resultado);

//ámbito global, lo que declaremos fuera de ningún bloque de código va a existir para todo el código
let bebida = "Chicha Morada";

function grupoPizza(){
    //ámbito, lo que declaremos dentro de un bloque de código definido por {} solamente va a existir en ese bloque
    let aperitivo = "panes al ajo";
    console.log(`voy a tomar algo de ${bebida}`)
    console.log(`voy a comer ${aperitivo}`)
}

grupoPizza();

// console.log(`yo también deseo ${aperitivo}`)

//Funciones en JS son Ciudadanos de primera clase
//podemos pasar una función como argumento a otra función

//preparamos un arroz chaufa
function picarVegetales(){
    console.log("picando vegetales");
}

function granearArroz(){
    console.log("graneando arroz");
}

function freirPolloYHuevo(){
    console.log("Freir Pollo y Huevo");
}

function prepararArrozChaufa(paso1, paso2, paso3){
    paso1();
    paso2();
    paso3();
}

prepararArrozChaufa(picarVegetales, granearArroz, freirPolloYHuevo);

//Hoisting
//el hoisting es cuando las funciones se mueven al inicio del código
//1ero estoy llamando a la función
saludo();
//luego la estoy declarando
function saludo() {
    console.log("Hola");
}

//conocemos esta sintaxis
//function nombre(){}

//función flecha
//let nombreFuncion = (parámetros) => {codigoAEjecutar}
//Funciones flecha no tienen hoisting

// let despedida = (nombre) => {
//     console.log(`bye ${nombre}`);
// }
let despedida = (nombre) => `bye ${nombre}`;

console.log(despedida("Juan Renato"));
console.log(despedida("Tebes"));
console.log(despedida("2023"));