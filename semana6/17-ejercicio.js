/**
 * Una tienda tiene un catalogo de juguetes y videojuegos, 
 * por navidad los tiene en oferta, Implemente una solución que permita
 * mostrar al usuario c/producto y añadirlo a un carrito para comprar
 */

let productos = [
    {
        nombre:"Nintendo Switch",
        precio: 1200
    },
    {
        nombre:"PS5",
        precio: 2500
    },
    {
        nombre:"Legend of Zelda, BOTW",
        precio: 200
    },
    {
        nombre:"Mando Nintendo Switch",
        precio: 99
    },
    {
        nombre:"Monopolio Mario Kart",
        precio: 150
    },
    {
        nombre:"Juego de Mesa, Virus",
        precio: 90
    },
]

function verProductos(){
    let carrito = [] //un arreglo vacio para ir añadiendo elementos

    for(let i = 0; i < productos.length; i++){
        let loCompra = confirm(`Desea comprar ${productos[i].nombre}, tiene un precio de ${productos[i].precio} S/`);
        // confirm es una función que ya me da un booleano
        if(loCompra){
            carrito.push(productos[i])
        }
    }
    //el 2do parámetro que recibe reduce es opcional, pero es el valor inicial que toma el acumulador(suma)
    //esto lo hacemos porque el acumulador de reduce suele tomar como valor el primer elemento del arreglo, por eso hay que indicarle en ocasiones el valor inicial
    const totalCompra = carrito.reduce(function(suma, item){
        return suma + item.precio;
        //el 0 será el valor inicial del acumulador
    }, 0)
    console.log(`su compra es por un total de ${totalCompra}`);
    console.table(carrito)
    // console.log("total compra: ", totalCompra)
   
}

verProductos()


