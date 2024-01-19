// JSON(Javascript Object Notation)

let anime = {
    nombre:"Jujutsu Kaisen",
    emision:2023,
    "cant-personajes":20,
}
console.log(anime)
console.log(typeof anime)

//el método stringify que me va a permitir crear un JSON a partir de un objeto
let animeJson = JSON.stringify(anime)
console.log("animeJson", animeJson)
console.log(typeof animeJson)

let usuaria = `
{"data":{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}
`;
//PARSE me va a permitir lo contrario, convertir de texto a JSON
let objUsuaria = JSON.parse(usuaria);

console.log(objUsuaria)

let frutas = ["Kiwi", "Fresa", "Salteña"];

let frutasJson = JSON.stringify(frutas);

console.log("frutasJSON", frutasJson)