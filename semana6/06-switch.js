let opcion = 2;
let pelicula = "Romántica";

//switch(la expresion a evaluar)

switch (opcion) {
    case 1:
        //código a ejecutar si la expresión es verdadera
        console.log("Elegiste la opcion 1 personal");
        break;
    case 2:
        console.log("Elegiste la opcion 2 duo");
        //el break es necesario par que trabaje mi switch
        break;
    case 3:
        console.log("Elegiste la opcion 3 familiar");
        break;
    default: //else
        console.log("Elegiste una opción inválida");
        break;
}

//deseo evaluar una expresión más compleja

switch(true) {
    case (pelicula === "Comedia" && opcion === 1):
        console.log("Elegiste la opcion 1 personal con La máscara");
        break;
    case (pelicula === "Ciencia Ficción" && opcion === 1):
        console.log("Elegiste la opcion 1 personal con Interstellar");
        break;
    case (pelicula === "Romántica" && opcion === 2):
        console.log("Elegiste la opcion 2 duo con La bella y la bestia");
        break;
    default:
        console.log("Elegiste una opción inválida");
        break;
}