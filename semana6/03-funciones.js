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