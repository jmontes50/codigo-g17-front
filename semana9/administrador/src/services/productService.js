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

const getProductById = (id) => {
    return axios.get(`${PRODUCTS_URL}/${id}`)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log(error)
    })
}

const updateProduct = (product) => {
    return axios.put(`${PRODUCTS_URL}/${product.id}`, product)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log(error)
    })
}

const deleteProduct = (id) => {
    return axios.delete(`${PRODUCTS_URL}/${id}`)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log(error)
    })
}



export {
    saveProduct,
    getProductById,
    updateProduct,
    deleteProduct
}