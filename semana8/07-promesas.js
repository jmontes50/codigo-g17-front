/*
//Version con callback
const hornear = (callback) => {
    setTimeout(function() {
        const resultado = "Torta Lista!"
        callback(resultado)
    }, 4000)
}

hornear(function(res) {
    console.log(res)
})*/

const hornear = () => {
    return new Promise(function(resolve, reject){
        //dentro de esta función va a ir mi código asíncrono
        setTimeout(function() {
            const resultado = "Torta Lista!"
            resolve(resultado) //return Positivo
            // resolve, sera si va bien
            //reject si va mal
            // reject("La torta se quemo")
        }, 4000)
    })
}

const cubrirChocolate = () => {
    return new Promise((resolve, reject) => {
        resolve("Torta Cubierta")
    })
}

hornear()
.then(function(resultadoBueno){ //obtendra el resultado de resolve
    console.log(resultadoBueno)
    //eL encadenamiento de promesas me permite retornar una promesa para continuar con el then
    return cubrirChocolate()
})
.then((res) => {
    console.log(res)
})
.catch(function(error){ //catch ontedra el resultado negativo de reject
    console.log("Error: ", error)
})