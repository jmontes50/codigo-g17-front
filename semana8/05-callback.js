alert("mensaje del alert")

const estudiantes = ["Pool", "Jean", "Yrvin", "Luis", "Juan"];

const estudianteExiste = (nombre, accion) => {
    for(let i = 0; i < estudiantes.length; i++){
        console.log(estudiantes[i])
        if(estudiantes[i] === nombre){
            // return true
            accion(true)
            return;
        }
    }
    // return false
    accion(false)
}

// console.log(estudianteExiste("Jean"))
// estudianteExiste("Jean", (siExiste) => {
//     console.log("Existe", siExiste)
// })

// estudianteExiste("Jean", function(siExiste) {
//     console.log("Existeee: ", siExiste)
// })

// const suma = (a, b) => {
//     console.log(a + b)
// }

// const resta = (a, b) => {
//     console.log(a - b)
// }

// resta(2, 5)

const ejecutarOperacion = (num1, num2, funcionCallback) => {
    funcionCallback(num1, num2)
}

ejecutarOperacion(2, 4, function (a, b) {
    console.log(a + b);
})

ejecutarOperacion(4, 7, function(a, b) {
    console.log(a - b)
})

//----------------------
//yo quiero imprimir una cuenta regresiva del 5 para atras hasta el 0
//como podria implementarlo -> utilizar un for
//recursividad 

function cuentaRegresiva (numero, funcionCallback) {
    console.log(numero)
    if(numero <= 0){
        return;
    }else {
        cuentaRegresiva(numero -1, funcionCallback)
    }
}

function termino (){
    console.log("Termino la cuenta!")
}

cuentaRegresiva(5, termino)