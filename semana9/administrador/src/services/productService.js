import axios from "axios";

const PRODUCTS_URL = 'https://616b5ead16c3fa001717167c.mockapi.io/productos';

//La idea es que el parámetro product sea un objeto
const saveProduct = (product) => {
    //al retornar axios estoy retornando una promesa
    return axios.post(PRODUCTS_URL, product)
    .then((response) => {
        //recordemos que axios me da toda la respuesta en un solo objeto incluyendo la data
        //la propiedad data contiene la data de la respuesta
        // console.log(response.data)
        return response.data
    })
    .catch((error) => {
        console.error(error)
    })
}

export {
    saveProduct
}