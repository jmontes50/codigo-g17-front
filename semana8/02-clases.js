//fabrica de objetos
class Personaje {
    nombre;
    peso;
    salto;
    velocidad;
    desplazamiento;
    // propiedad privada, con #, aplicamos encapsulamiento
    #fuerza;
    // construir mi objeto
    // Tiene que tener ese nombre, constructor
    // es el primer método que se va a ejecutar
    constructor(Nombre, Peso, Salto, Velocidad, Desplazamiento, Fuerza){
        //this, hace referencia al mismo objeto
        this.nombre = Nombre;
        this.peso = Peso;
        this.salto = Salto;
        this.velocidad = Velocidad;
        this.desplazamiento = Desplazamiento;
        this.#fuerza = Fuerza
        console.log(this.nombre)
    }

    //Getters y Setters
    
    get fuerza() {
        return this.#fuerza;
    }

    set fuerza(nuevaFuerza) {
        //si el tipo de dato NO es un number
        if(typeof nuevaFuerza !== "number"){
            console.log("Error de tipado");
            return; //retorna un valor, corta la ejecución de la función
        }
        this.#fuerza = nuevaFuerza
    }

    atacar(oponente){
        console.log(`${this.nombre} ataca a ${oponente}`)
    }
}
//new NombreClase, estamos creando una instancia a partir de la clase Personaje
const personaje1 = new Personaje("Bowser", 99, 60, 50, 45, 100);

console.log(personaje1)

personaje1.peso = 80

personaje1.fuerza = 120;

console.log(personaje1.fuerza)

personaje1.atacar("Kirby");

//-----------------------
//HERENCIA
//Podemos crear una clase que herede otras propiedades
class Bot extends Personaje {
    dificultad;

    constructor(Nombre, Peso, Salto, Velocidad, Desplazamiento, Fuerza, Dificultad){
        //super que hara referencia al constructor de la clase padre
        super(Nombre, Peso, Salto, Velocidad, Desplazamiento, Fuerza)
        this.dificultad = Dificultad
    }
}

const robot1 = new Bot("Charizard", 120, 150, 45, 35, 160, "fácil")

console.log(robot1)

robot1.atacar("Rattata")