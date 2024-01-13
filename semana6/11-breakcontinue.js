//control de flujo
/*
let estudiantes = ["Pool","Marbella","Juan"];

let busqueda = prompt("Ingrese el nombre a encontrar");

for(let i = 0; i < estudiantes.length; i++){
    console.log(estudiantes[i])
    if(busqueda === estudiantes[i]){
        console.log(`Se encontro a ${busqueda} en la posición/índice: ${i}`)
        break; //cuando se ejecuta un break termina la ejecución del for
    }
}*/

let notas = [20, 18, 14, 11, 17, 15, 10, 8, 20];

//yo quiero saber la cantidad de estudiantes que aprobaron
//la nota aprobatoria es 13

for(let i = 0; i < notas.length; i++){
    if(notas[i] <= 13){
        continue; //si se ejecuta este continue va a saltarse el proceso del for 
    }
    //proceso para matricular, burocracia
    console.log(`la nota a considerar es ${notas[i]}`)
}