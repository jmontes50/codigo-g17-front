let arrAlumnos = ["Piero","Marbella","Yrvin","Juan","Cesar"];

console.log("cant. estudiantes", arrAlumnos.length);

/*while(expresión condicional){
    va a ser el codigo a ejecutarse una y otra vez hasta que mi expresión pues sea falsa
}*/
/*
let contador = 0;
while(contador < arrAlumnos.length){
    console.log("Presente!")
    contador = contador + 1;
    console.log("contador", contador)
}
*/
//DO WHILE - primero ejecuta el codigo y luego comprueba la condición - es como James Bond, primero dispara luego pregunta
/*
let contador = 20000;
do{
    console.log("Presente!")
    contador = contador + 1;
    console.log("contador", contador)
}while(contador < arrAlumnos.length)

let esVerdad = false;
do{
    let meQuiere = prompt("Me quiere?");
    console.log("Si me quiere? ", meQuiere)
    if(meQuiere === "si"){
        esVerdad = true;
    }else{
        esVerdad = false;
    }
}while(esVerdad === true);
*/
//FOR
//for(inicialización; condición; incremento){codigo a ejecutar})
//inicialización -> un valor que declaramos para esta estructura
//condición -> una expresión que nos dice si seguimos ejecutando el código, igual que antes se ejecutará hasta que esta expresión deje de ser verdadera
//incremento -> un valor que incrementaremos en cada iteración del código
// i = i + 1 -> i++
// i = i - 1 -> i--
// i = i + 2 -> i += 2
// for(let i = 0; i < 5; i = i + 1){
// for(let i = 0; i < 5; i++){
//     console.log("Iterador ", i)
// }

//en una profesora de Jardín o Inicial
//Lleva a un paseo a los niños y niñas y quiere asegurarse que no se pierda nadie

let cantidadDeNinosEsperada = 10;
//for(inicialización; condición; incremento){codigo a ejecutar})
//i++ que se va incrementar en 1
//i = i + 1
for(let i = 1; i <= cantidadDeNinosEsperada; i++){
    console.log(`Niño Numero ${i} ven aquí!`)
} //se termine de ejecutar el for, hasta que la condición sea falsa, recién se ejecutará lo que está después
console.log("Tengo a la clase completa!")

let cont = 0;
while(cont < 5){
    console.log(`estoy funcionando! ${cont}`)
    cont = cont + 1;
}