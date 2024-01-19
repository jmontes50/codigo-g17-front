console.log("Hola")
//todo lo que hemos estado utilizando
/**document
 * localStorage
 * console
 * 
 * existe dentro del objeto window
 * Pero no es necesario escribirlo
 */
window.console.log("que tal!")

console.log(window)
//Window nos va a dar acceso a diferentes API del navegador
/**
 * API DOM - me permite interactuar con el DOM
 * API de Geolocalización, me da la unicacion
 * API de Almacenamiento, LocalStorage
 * API Multimedia, accede a hardware como el microfono o la cámara web
 */
window.navigator.geolocation.getCurrentPosition(function(posicion){
    console.log(posicion)
})