const container = document.getElementById("container");

//XHR - XMLHttpRequest
//Ajax

const hacerSolicitud = (callback) => {
    const cartero = new XMLHttpRequest();
    cartero.addEventListener("readystatechange", () => {
        console.log("readyState", cartero.readyState)

        if(cartero.readyState === 4){
            console.log("responseText", cartero.responseText)
            const usuarios = JSON.parse(cartero.responseText)
            console.log({ usuarios })
            callback(usuarios.data)
        }
    })

    //configurar, rotular
    cartero.open("GET", "https://reqres.in/api/users?page=2", true)

    //Enviar
    cartero.send()
}

hacerSolicitud( function(misUsuarios) {
    let htmlUsuarios = ""
    for(let user of misUsuarios){
        htmlUsuarios = htmlUsuarios + `<p>${user.first_name}</p>`
    }
    container.innerHTML = htmlUsuarios;
} )


