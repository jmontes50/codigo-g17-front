//Lo más común es que nuestra API haga el filtrado, páginado, búsqueda
//como no lo tiene lo estamos haciendo en el front, 
//No es buena práctica hacer algun filtro en el front, es recomendable siempre hacer esto en el back
const filterDataByPrice = (data, priceMin = 1, priceMax = 10000) => {
    //vamos a filtrar usando dos expresiones
    //1. la primera indicando que el precio sea mayor o igual a priceMin
    //2. la segunda indicando que el precio sea menor o igual a priceMax
    return data.filter((item) => item.precio >= priceMin && item.precio <= priceMax);
}

/**
 * 
 * {
    "id": "3",
    "nombre": "Bolso Elegante",
    "descripcion": "Bolso de mano con estilo elegante",
    "precio": 60,
    "imagen": "https://loremflickr.com/640/480/clothes",
    "color": [
      "#000000",
      "#FFD700",
      "#C0C0C0"
    ],
    "stock": "45",
    "review": [
      "El bolso es hermoso y espacioso. Calificación: 4",
      "Perfecto para cualquier ocasión. Calificación: 5"
    ],
    "categoria": [
      "Mujer",
      "Accesorios"
    ]
  },
 */

const filterDataByCategories = (data, categories) => {
    //yo no quiero comparar si son iguales
    //quiero comparar si category existe dentro del arreglo item.categoria
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    // return data.filter((item) => item.categoria.includes(category));
    return data.filter((item) => categories.some((category) => item.categoria.includes(category)));
}

export {
    filterDataByPrice,
    filterDataByCategories
}