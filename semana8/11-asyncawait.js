//ASYNC AWAIT VA A SER UNA MEJORA EN LA SINTAXIS DE PROMESAS

// const buscarPorNombre = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Se encontro a la persona")
//     })
// }
//Async
/**
 * const miFuncion = async () => {
 *      return resultado
 * }
 * 
 * async function miFuncion () {
 *      return resultado
 * }
 */
//ASYNC Es la manera corta de trabajar/dar una promesa
const buscarPorNombre = async () => {
    //return equivalente a resolve
    // return "Se encontro a la persona"
    throw "No se encontro a la persona solicitada"
    //throw va a ser equivalente al reject
}


// buscarPorNombre()
// .then((resultado) => {
//     console.log(resultado)
// })
// .catch((resNegativo) => {
//     console.error("😢", resNegativo)
// })

//AWAIT es la manera algo mas corta de consumir una promesa
//Rules
//1. await tiene que estar dentro de otra funcion
//2. esa función tiene que ser async
const getNombre = async () => {
    //await me permite obtener el return/resolve
    //trycatch en realidad es una manera de poder encontrar errores en un bloque de errores
    try {
        //intenta ejecutar el codigo de aqui
        //try buscaremos obtener el return/resolve con await
        const resultado = await buscarPorNombre()
        console.log({ resultado })
    } catch (error) {
        //y en el catch, obtendremos el reject/throw
        //pero si encuentras errores muestramelos aquí
        console.log({ error })
    }
}
// getNombre()

const getData = async () => {
    //SIEMPRE UTILICEN TRYCATCH CON AWAIT
    try {  
       const respuesta = await fetch("https://reqres.in/api/users?page=2")
    //    console.log({ respuesta })
       const datos = await respuesta.json()
    //    console.log({ datos })
    } catch (error) {
        console.log({ error })
    }
}
getData();