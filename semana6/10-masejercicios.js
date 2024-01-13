/*
Una clínica según el número de consultas
va reduciendo el costo de las consultas por bloques
para cobrar el total a fin de mes
Las 3 primeras consultas costarán 120
las 4 siguientes consultas costaran 100
las posteriores consultas costaran 90

//Se requiere saber cuanto pagará el paciente al finalizar el mes

numeroDeConsultas
TotalAFinDeMes

//Alguien me dice cuantas citas tuvo en todo el mes
//1. preguntar primero
//2. Contar
//3. verificar que cita es
*/
/*
let cantidadDeCitas = parseInt(prompt("Cuantas citas tuvo el paciente"));

let totalAFinDeMes = 0;

for(let i = 1; i <= cantidadDeCitas; i++){
    if(i <= 3){
        totalAFinDeMes = totalAFinDeMes + 120;
    }else if(i <= 7){
        totalAFinDeMes = totalAFinDeMes + 100
    }else{
        totalAFinDeMes = totalAFinDeMes + 90
    }
}

console.log(`Total es : ${totalAFinDeMes}`)
*/

//confirm pregunta el usuario para darme un valor Booleano
// const resuelve = confirm("Ud. resuelve?");
// console.log(resuelve)

/*Una tienda de ofertas tiene productos para ofrecer con diferentes precios, Ud tiene un presupuesto limitado y tiene que escoger segun la lista de forma ordenada si adquiere el producto
costoTotal es necesario saberlo
*/

let preciosOfertas = [20, 10, 50, 8, 75, 5, 22, 45, 100];

let costoTotal = 0;

let deseaComprar = false;

for(let i = 0; i < preciosOfertas.length; i++){
    let continuar = confirm(`Desea comprar el producto de valor ${preciosOfertas[i]}`)
    if(continuar){
        costoTotal = costoTotal + preciosOfertas[i]
    }else{
        console.log("No compro")
    }
    //preguntamos si desea seguir y si no desea corto todo
    deseaComprar = confirm("Desea seguir comprando???")
    // if(deseaComprar === false){
    if(!deseaComprar){
        break;
    }
}
console.log(`El costo total de su compra es: ${costoTotal}`)