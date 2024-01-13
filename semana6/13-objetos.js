//VARIABLE
//let nombre = "Jorge";

//ARREGLOS
//let ciudades = ["Arequipa","Lima","Santiago","Medellin"]

//OBJETOS
//para declarar un objeto sigo el camino de variables y arreglos de crear una referencia con let, pero para indicar que es un objeto utilizare llaves {} y después dentro de este objeto, podemos definir propiedades con valores (key:value) con la sintaxis nombrePropiedad:valorDeLaPropiedad
let perro = {
    nombre: "Rufus",
    edad:5,
    raza:"Peruano sin pelo",
    esAmigable: true,
    genero: "M",
    //a estas funciones que estan dentro de un objeto
    //también se les suele llamar métodos
    ladrar: function() {
        console.log("WAU WAU WAU ARF!")
    },
    //esta también es una sintaxis para declarar un método
    jugar(){
        console.log("ARF ARF ARF PELOTA ARF!")
    }
}
/*
console.log(perro)
//si deseo utilizar una sola propiedad del objeto
//Me basta con indicar el nombre del objeto.nombrePropiedad
console.log(perro.nombre)
console.log(perro.edad)
//estoy siguiendo la misma sintáxis
perro.ladrar()

perro.jugar()
*/
//--------------------------------------

let albumMusical = {
    agrupacion:"ACDC",
    nombre: "Highway to Hell",
    fechaLanzamiento: "27/07/1979",
    generos: ["Hard Rock", "Blues Rock", "Heavy metal"],
    canciones: [
        {
            titulo: "Highway to Hell",
            duracion: 3.28,
            autores:["Angus Young", "Malcolm Young", "Bon Scott"]
        },
        {
            titulo: "Touch too Much",
            duracion: 4.26,
            autores: ["Angus Young", "Malcolm Young", "Bon Scott"]
        }
    ]
}

console.log(albumMusical.agrupacion)
console.log(albumMusical.generos[2])
console.log(albumMusical.canciones[0])
console.log(albumMusical.canciones[0].duracion)
console.log(albumMusical.canciones[1].autores[2])