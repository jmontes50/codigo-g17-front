

const notas = [
    {
        nombre:"Bran",
        nota: 16,
    },
    {
        nombre:"Sansa",
        nota: 14,
    },
    {
        nombre:"Arya",
        nota: 19,
    },
    {
        nombre:"Geofrey",
        nota: 9,
    },
    {
        nombre:"Daenerys",
        nota: 10,
    }
];
//segun el arreglo de objetos, muestre los nombres de quienes han aprobado, nota aprobatoria mayor a 10
/*
for(let i = 0; i < notas.length; i++){
    if(notas[i].nota > 10){
        console.log(notas[i].nombre)
    }
}*/

const notasFinales = [
    {
        nombre:"Bran",
        notas: [16, 10, 11],
    },
    {
        nombre:"Sansa",
        notas: [5, 10, 15],
    },
    {
        nombre:"Arya",
        notas: [16, 14, 19]
    },
    {
        nombre:"Geofrey",
        notas: [6, 7, 11]
    },
    {
        nombre:"Daenerys",
        notas: [9, 7, 13]
    }
];
//en base a un arreglo de estudiantes, por cada uno calcule el promedio final en base a la propiedad notas e indique si aprobo o no
/*
for(let i = 0; i < notasFinales.length; i++){
    let sumaNotas = 0;
    for(let j = 0; j < notasFinales[i].notas.length; j++){
        sumaNotas = sumaNotas + notasFinales[i].notas[j]
    }
    // let promedio = sumaNotas / 3
    // let promedio = sumaNotas / j-1
    let promedio = sumaNotas / notasFinales[i].notas.length
    // console.log("sumaNotas ", sumaNotas)
    // console.log("sumaNotas ", promedio)
    
    if(promedio > 10){
        console.log(`${notasFinales[i].nombre} esta aprobado(a) con una promedio de: ${promedio}`)
    }else{
        console.log(`${notasFinales[i].nombre} esta desaprobado(a) con una promedio de: ${promedio}`)
    }
}
*/

//funciones puras, de que no se ven afectadas por algo externo
//de que si tienen una entrada la salida siempre sera la misma en base a esa entrada
//Single responsability, Una sola responsabilidad: una función en lo posible debe hacer 01 sola cosa
function estaAprobado (nombre, promedioFinal){
    if(promedioFinal > 10){
        return `${nombre} esta aprobado con ${promedioFinal}`
    }else{
        return `${nombre} esta desaprobado con ${promedioFinal}`
    }
}

function calcularPromedio(notas){
    // console.log("Notas: ", notas)
    let sumaNotas = 0;
    for(let i = 0; i < notas.length; i++){
        sumaNotas = sumaNotas + notas[i]
    }
    let promedio = sumaNotas / notas.length
    return promedio;
}

function obtenerNotas(datosEstudiantes){
    for(let i = 0; i < datosEstudiantes.length; i++){
        let promedioEst = calcularPromedio(datosEstudiantes[i].notas)
        // console.log("Promedio est: ", promedioEst)
        const resultado = estaAprobado(datosEstudiantes[i].nombre, promedioEst)
        console.log(resultado)
    }
}

obtenerNotas(notasFinales)
