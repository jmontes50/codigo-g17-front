/**fetch me da una promesa
 * fetch(url)
 * .then((response) => {
 *      //Pero esta respuesta es como la notificación de como llego, contiene data informativa pero no los datos que estoy solicitando
 * //para eso la respuesta tendra un metodo json(), ese metodo me da tambien me da una promesa
 *  return response.json()
 * })
 * //y aqui en el then del .json()
 * .then((data) => {
 *  //recien obtendre mi data, mi JSON, pero ya convertido a JS
 *  console.log(data)
 * })
 */

fetch("https://reqres.in/api/users?page=2")
.then((respuesta) => {
    console.log(respuesta)
    //va a tener un metodo para poder obtener la data
    return respuesta.json() //para poder obtener los datos, tengo que retornar a partir de mi rpta el metodo json, esto me da una promesa que automaticamente convierte los datos de la peticion en un objeto, sin usar JSON.parse()
})
.then((datos) => {
    console.log("DATOOS ", datos)
})
.catch((error) => {
    console.error(error)
})