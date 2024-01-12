//expresión vs sentencia
//Sentencia, le estoy dando una orden una instrucción, Haz esto
let edad = 17; //asigna este valor
let acompanadoAdulto = true;
console.log("muestrame la edad: ", edad) //muestra este valor

//Expresión, nos va a dar un resultado, nos retorna algo
//Nada pe mano -> significa algo más
edad
//if(evaluar si una expresion es verdadera o falsa)
// console.log(edad >= 18)
if(edad >= 18 && edad < 30 || acompanadoAdulto == true){
    //Y en caso la expresión sea verdadera, haz esto
    console.log("Puedes pasar a la discoteca/club");
    //agregar una condición adicional
}else if(edad >= 30 && edad < 60){
    console.log("Puedes pasar a la discoteca/club pagando 20 S/ con derecho a una bebida");
}else if(edad >= 60 ){
    console.log("Puedes pasar a la discoteca/club comprando algo");
}else{
    console.log("No puedes pasar a la discoteca/club");
}

//== evalua valores. solo valores "1" == 1, da True
//=== evalua valores y tipos de datos. "1" === 1, da False
//RECOMENDACIÓN, siempre usar === para comparar valores y tipos de datos.
console.log("probando igualdad: ", "1" === 1);