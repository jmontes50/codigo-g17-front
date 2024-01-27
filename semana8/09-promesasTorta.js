/*const hornearTorta = () => {
    //setTimeout(funcion, tiempoEnMS), la funcion la va a ejecutar digamos en el tiempo que le estoy indicando
    let tortaHorneada = "Aun estoy sin hornear"
    setTimeout(() => {
        tortaHorneada = "La torta esta horneada"
    }, 3000)
    return tortaHorneada
}

const prepararCubierta = () => {
    let cubierta = "Es un barrita de chocolate sin preparar"
    setTimeout(() => {
        cubierta = "La cubierta esta lista"
    }, 3000)
    return cubierta
}

const decorarTorta = () => {
    let decorado = "Torta preparandose"
    setTimeout(() => {
        decorado = "La torta ya esta!"
    }, 3000)
    return decorado
}

const resHornearTorta = hornearTorta()
// console.log({ resHornearTorta:resHornearTorta })
console.log({ resHornearTorta });

const resPrepararCubierta = prepararCubierta()
console.log({ resPrepararCubierta });

const resDecorarTorta = decorarTorta()
console.log({ resDecorarTorta });
*/
//PROMESAS SINTAXIS
/**
 * const miFuncion = () => {
 *      return new Promise((resolve, reject) => {
 *          //resolve indicara que todo fue bien, positivo 👍
 *          //reject, indicara que algo fue mal, negativo 😢
 *          //Y AQUI dentro de la funcion que recibe la promesa
 *          //IRA MI CODIGO ASINCRONO
 *          //Y dependiendo podre utilizar resolve y reject para indicar como fue, como acabo
 *          //resolve(resultado Bueno)
 *          //reject(resultado malo)
 *      })
 * }
 */
const hornearTorta = () => {
  return new Promise((resolve, reject) => {
    //VA EL CÓDIGO ASINCRONO
    let tortaHorneada = "Aun estoy sin hornear";
    setTimeout(() => {
      tortaHorneada = "La torta esta horneada 👍";
      resolve(tortaHorneada) //lo pueden ver como un return
      // reject("la torta se quemo 🔥")
      // return tortaHorneada //no pouedoi hacer un return del resultado
    }, 3000);
  });
};

const prepararCubierta = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("La cubierta esta lista 🍫");
      reject("la cubierta se malogro 😣")
    }, 3000);
  })
};

const decorarTorta = () => {
  let decorado = "Torta preparandose";
  setTimeout(() => {
    decorado = "La torta ya esta!";
  }, 3000);
  return decorado;
};

/**
 * funcionConPromesas()
 * .then((resultadoPositivo) => {
 * //then capturare el resolve
 *    responder segun ese resultadoPositivo
 *    console.log(resultadoPositivo)
 * })
 * .catch((resultadoNegativo) => {
 * //catch capturare el reject
 *    responder segun ese resultadoNegativo
 *    //mandar un mensaje de error, probar de nuevo
 *    console.error(resultadoNegativo)
 * }
 */

hornearTorta()
.then((resultado) => {
  //aqui es positivo es el resultado del resolve
  console.log({ resultado })
  return prepararCubierta()
})
.then((resultadoCubierta) => {
  console.log({ resultadoCubierta })
})
.catch((resultadoNegativo) => {
  console.error(resultadoNegativo)
})

//ENCADENAMIENTO PROMESAS
/*funcionQueMeDaPromesa1()
  .then((res) => {
    return funcionQueMeDaPromesa2(res)
  })
  .then((res2) => {
    return funcionQueMeDaPromesa3(res2)
  })
*/
