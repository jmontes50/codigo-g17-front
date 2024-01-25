//variables
//1ra manera que tenemos de declarar variables, pero no es recomendable
// var apellido = "Montesinos";
// let nombre = "Jorge";

var apellido = "Tasayco";
let nombre = "Pool";

console.log(nombre, apellido);
/*
for(let i = 0; i < 5; i++){
    var numero = 5
    console.log(numero)
}

numero = 10
console.log(numero)
*/
//en forma de constante, no puedo cambiar su valor directamente
const IGV = 0.18;

// IGV = 0.15;
//frutas es un arreglo y al ser un arreglo tiene un método push
const frutas = ['Kiwi', "Naranja", "Mango"];
//por los metodos internos que tiene un arreglo u objeto, si se puede modificar. Directanmente no
frutas.push("Aguaymanto");

console.log(frutas);

//Si no cambia de valor se utiliza const, si cambia pues let

//-----------------------------------------------------------
//Arrow function o función flecha
function suma(a, b){
    return a + b;
}

const suma2 = function(a, b){
    return a + b;
}

console.log(suma2(2, 5))

//const nombreFuncion = (parámetros) => {codigo a ejecutar}
const suma3 = (a, b) => {
    return a + b
}
//const nombreFuncion = (parámetros) => expresionQueVoyARetornar
const suma4 = (a, b) => a + b;
//solamente va a recibir UN solo parámetro
const saludar = nombre => `Hola ${nombre}`

console.log(suma3(2, 9))

console.log(suma4(15, 15))

console.log(saludar("Mariana"))

//diferencias entre arrow y clasic function

const persona = {
    nombre: "Ricardo",
    saludar: function(){
        // this, hace referencia al contexto del obejto
        console.log(`Hola! soy ${this.nombre}`)
        //this - yo
        // console.log(this)
    },
    //intentemos no utilizar arrow function, dentro de objetos
    despedirse: () => {
        console.log(`Soy ${this.nombre} y me tengo que ir`)
        // console.log(this)
    }
}

persona.saludar();

persona.despedirse();

const edad = 25;
//template String
const texto = `Mi edad es ${edad}`;

console.log(texto)

//Spread Operator
const pokemon1 = {
    nombre:"Pikachu",
    ataque: 100,
    defensa: 40,
    shiny:false
}

let pokemon2 = pokemon1; //esto es una copia por referencia
//no es bueno hacer esto
//copia por valor, Spread Operator
//al momento de copiar/esparcir las propiedades del objeto puedo reemplazar o añadir otras
const pokemon3 = {...pokemon1, shiny:true, entrenador: "Ash"};

pokemon2.ataque = 60;

console.log("pokemon2", pokemon2)

console.log("pokemon1", pokemon1)
//todo lo que no sea primitivo se manejará por referencia

console.log("pokemon3", pokemon3)

delete pokemon3.entrenador

console.log("pokemon3 después del delete", pokemon3)

//----------- Spread Operator en arrays
const platos = ["Tacu Tacu", "Chaufa", "Ají de gallina"];

const carta = [...platos, "Adobo", "Cuy", "carapulcra chinchana"];

console.log("carta", carta)

//---------------------------------------
//DESESTRUCTURACIÓN
const pelicula = {
    titulo:"Shrek",
    anio:2001,
    productora:"Dreamworks"
}

// console.log(pelicula.titulo)

// console.log(pelicula.anio)

// console.log(pelicula.productora)
//Si yo conozco las propiedades de algo, puedo dividirlo en las partes que me interesen

const { titulo, productora, anio } = pelicula;

console.log(titulo)

console.log(anio)

console.log(productora)

const moto = {
    marca:"Kawasaki",
    anio:2024,
    color:"negro",
    motor:"900cc",
    precio: 26000
}
//al desestructurar el parámetro que seria un objeto me aseguro de que lleguen los valores correctos y evito errores en caso pase un argumento con el orden errado
const procesarMoto = ({marca, anio, precio, motor}) => {
    //stuff
    console.log(marca, anio, precio, motor)
}

// procesarMoto("Kawasaki", 2024, "negro", "900cc")
procesarMoto(moto)


const propietario = "Pool";
//Estoy indicando un objeto que tiene la propiedad propietario con valor de la variable/referencia llamada propietario
console.log({ propietario })
// console.log({ propietario: propietario })

let comprador = {
    // propietario: propietario
    propietario
}

// console.log(comprador)
//arreglos desestructuración

const peliculas = ["Interstellar", "BeetleJuice", "TopGun", "rapidos y furiosos"];

// console.log(peliculas[0])
// console.log(peliculas[1])
// console.log(peliculas[2])
// console.log(peliculas[3])

// const peliTerror = peliculas[1];

const [peliCiencia, peliTerror, peliAccion, peliAutos] = peliculas;

console.log(peliCiencia)
console.log(peliTerror)
console.log(peliAccion)
console.log(peliAutos)