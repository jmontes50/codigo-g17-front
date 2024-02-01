//esto es el equivalente a import, es una sintaxis que se llama CommonJS
const axios = require("axios")

axios.get("https://reqres.in/api/users?page=2")
.then((respuesta) => {
    console.log(respuesta.data)
})
