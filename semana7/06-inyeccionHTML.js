let titulo = document.getElementById("titulo");
let ulSponsors = document.getElementById("sponsors");
console.log(titulo)

titulo.innerHTML = "Elementos <span>De HTML</span>"

function dibujarSponsors(arrSponsors){
    let htmlULSponsors = "";
    //Gracias al forEach
    //Por cada item que encontremos en arrSponsors
    //vamos a generar un <li> con el contenido del item
    arrSponsors.forEach(function(item){
        htmlULSponsors = htmlULSponsors + `
            <li class="lista">${item}</li>
        `
    });
    //retornamos htmlULSponsors
    return htmlULSponsors;
}

//NO OBTENGO NADA
// let misLIS = document.querySelectorAll(".lista")
// console.log("misLIS: ", misLIS)

let htmlSponsors = dibujarSponsors(["Audi", "Apple", "Zentorno"])

ulSponsors.innerHTML = htmlSponsors;

//OBTENGO LOS ELEMENTOS CREADOS
let misLIS = document.querySelectorAll(".lista")
console.log("misLIS: ", misLIS)