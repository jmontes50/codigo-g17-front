//Lo más común es que nuestra API haga el filtrado, páginado, búsqueda
//como no lo tiene lo estamos haciendo en el front, 
//No es buena práctica hacer algun filtro en el front, es recomendable siempre hacer esto en el back
const filterDataByPrice = (data, priceMin = 1, priceMax = 10000) => {
    //vamos a filtrar usando dos expresiones
    //1. la primera indicando que el precio sea mayor o igual a priceMin
    //2. la segunda indicando que el precio sea menor o igual a priceMax
    return data.filter((item) => item.precio >= priceMin && item.precio <= priceMax);
}

export {
    filterDataByPrice
}