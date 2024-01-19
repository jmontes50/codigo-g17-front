//guardar algo
//localStorage.setItem(nombreDelValorAGuardar, valorEnSiComoString)
let btn = document.getElementById("eliminar");

//la forma de guardar datos en LS siempre será texto
localStorage.setItem("nombres", [20000, 10000]);

let nombreLS = localStorage.getItem("nombres");

console.log(nombreLS);

btn.addEventListener('click', function(){
    // console.log("hola")
    localStorage.removeItem("nombres")
});


