let platosPeruanos = [
    {
      id: 1,
      nombre: 'Ceviche',
      descripcion: 'Pescado fresco marinado en limón con cebolla, ají y cilantro.',
      precio: 25.99,
      imagen: 'ceviche.jpg'
    },
    {
      id: 2,
      nombre: 'Lomo Saltado',
      descripcion: 'Trozos de carne salteados con cebolla, tomate, ají y acompañados de papas fritas.',
      precio: 30.50,
      imagen: 'lomo_saltado.jpg'
    },
    {
      id: 3,
      nombre: 'Aji de Gallina',
      descripcion: 'Pollo deshilachado en una salsa cremosa de ají amarillo, servido con arroz y papas.',
      precio: 22.75,
      imagen: 'aji_de_gallina.jpg'
    },
    {
      id: 4,
      nombre: 'Anticuchos',
      descripcion: 'Brochetas de corazón de res marinadas en ají panca y acompañadas de papa y choclo.',
      precio: 18.90,
      imagen: 'anticuchos.jpg'
    },
    {
      id: 5,
      nombre: 'Rocoto Relleno',
      descripcion: 'Rocoto relleno con carne molida, papas y queso gratinado.',
      precio: 28.75,
      imagen: 'rocoto_relleno.jpg'
    },
    {
      id: 6,
      nombre: 'Seco de Cordero',
      descripcion: 'Estofado de cordero con cilantro, acompañado de frejoles y arroz.',
      precio: 35.25,
      imagen: 'seco_de_cordero.jpg'
    },
    {
      id: 7,
      nombre: 'Tiradito',
      descripcion: 'Pescado cortado en tiras finas con salsa de ají amarillo y limón.',
      precio: 26.50,
      imagen: 'tiradito.jpg'
    },
    {
      id: 8,
      nombre: 'Tacu Tacu',
      descripcion: 'Arroz y frijoles mezclados y luego fritos, acompañados de salsa criolla y carne.',
      precio: 20.99,
      imagen: 'tacu_tacu.jpg'
    },
    {
      id: 9,
      nombre: 'Papa a la Huancaína',
      descripcion: 'Papas cocidas en rodajas con salsa de queso, ají amarillo y lechuga.',
      precio: 16.80,
      imagen: 'papa_a_la_huancaina.jpg'
    },
    {
      id: 10,
      nombre: 'Chaufa de Mariscos',
      descripcion: 'Arroz frito con mariscos, verduras y salsa de soja al estilo chino-peruano.',
      precio: 32.00,
      imagen: 'chaufa_de_mariscos.jpg'
    },
    {
      id: 11,
      nombre: 'Arroz con Pollo',
      descripcion: 'Arroz cocido con pollo en una deliciosa salsa de ají amarillo y cerveza.',
      precio: 24.50,
      imagen: 'arroz_con_pollo.jpg'
    },
    {
      id: 12,
      nombre: 'Mazamorra Morada',
      descripcion: 'Postre peruano a base de maíz morado, frutas y camote.',
      precio: 12.75,
      imagen: 'mazamorra_morada.jpg'
    },
    {
      id: 13,
      nombre: 'Chupe de Camarones',
      descripcion: 'Sopa espesa con camarones, papa, huevo, arroz y leche.',
      precio: 29.90,
      imagen: 'chupe_de_camarones.jpg'
    },
    {
      id: 14,
      nombre: 'Parihuela',
      descripcion: 'Sopa de pescado y mariscos con verduras, cilantro y yuca.',
      precio: 34.25,
      imagen: 'parihuela.jpg'
    },
    {
      id: 15,
      nombre: 'Causa Limeña',
      descripcion: 'Capas de puré de papa amarilla con ají, rellenas de pollo, atún o mariscos.',
      precio: 19.50,
      imagen: 'causa_limena.jpg'
    },
    {
      id: 16,
      nombre: 'Picarones',
      descripcion: 'Rosquillas de masa de zapallo y camote, fritas y bañadas en miel de chancaca.',
      precio: 14.80,
      imagen: 'picarones.jpg'
    },
    {
      id: 17,
      nombre: 'Butifarra',
      descripcion: 'Sandwich de jamón de cerdo ahumado con salsa criolla en pan francés.',
      precio: 15.25,
      imagen: 'butifarra.jpg'
    },
    {
      id: 18,
      nombre: 'Humitas',
      descripcion: 'Masa de maíz rellena de carne, envuelta en hojas de maíz y cocida al vapor.',
      precio: 17.50,
      imagen: 'humitas.jpg'
    },
    {
      id: 19,
      nombre: 'Tamal',
      descripcion: 'Masa de maíz rellena de carne, envuelta en hojas de plátano y cocida al vapor.',
      precio: 16.90,
      imagen: 'tamal.jpg'
    },
    {
      id: 20,
      nombre: 'Helado de Lucuma',
      descripcion: 'Helado hecho con la fruta peruana llamada lucuma, con un sabor único y delicioso.',
      precio: 12.50,
      imagen: 'helado_de_lucuma.jpg'
    },
];

let platosSection = document.getElementById("platos");
let boletaSection = document.getElementById("boleta");

let carritoCompras = [];

function encontrarPlato(id){
  //1. convertir el id recibido a un numero, porque al obtenerlo viene como un string
  //lo convierto a un numero
  let idNumber = parseInt(id);
  //buscamos un plato lo encontramos
  let platoEncontrado = platosPeruanos.find(function(plato){
    return plato.id === idNumber;
  })
  //lo retornamos
  return platoEncontrado;
}

function agregarProductoACarrito(plato) {
  //2. preguntar si es que este plato ya existe en carritoCompras
  //3. En caso no exista lo vamos a agregar a carrito como un producto Nuevo con cantidad 1
  //4. en caso ya exista solo aumentaremos la cantidad

  //el findIndex retornado en plato existe me da -1 si es que es platoNuevo y numeros mayores a -1 (0, 1,2..) en caso el playo ya exista dentro de carritoCompras
  let platoExiste = carritoCompras.findIndex(function(item){
    return item.id === plato.id;
  })
  if(platoExiste === -1){
    //Es nuevo!, como es nuevo lo voy a agregar
    //Y le vamos añadir una nueva propiedad
    plato.cantidad = 1;
    carritoCompras.push(plato)
  }else{
    // console.log(platoExiste)
    //platoExiste me da la posición/índice de donde esta este plato en el carritoCompras
    //como ya existe ubicamos con la posición dentro de carritoCompras el plato e incrementamos su cantidad en 1
    carritoCompras[platoExiste].cantidad++;
  }
  

}

function crearCartasComida (listaPlatos) {
    // for(let i = 0; i < listaPlatos.length; i++)
    //for of
    //por cada plato que encuentre dentro de listaPlatos
    let arrCartas = [];
    for(let plato of listaPlatos){
        let cartaComida = document.createElement("div");
        cartaComida.classList.add("col-lg-3");
        cartaComida.classList.add("col-12");
        // console.log(plato)
        //cuando agregamos el HTML como string con innerHTML a un elemento, 
        //ya todo lo que hemos agregado lo podemos buscar como un elemento con
        //querySelector y así acceder a sus propiedades y métodos.
        cartaComida.innerHTML = `
        <div class="card mb-3">
            <img src="https://picsum.photos/300" class="card-img-top" alt="${plato.nombre}">
            <div class="card-body">
                <h5 class="card-title">${plato.nombre}</h5>
                <p class="card-text">${plato.descripcion}</p>
                <p class="fs-6">S/ ${plato.precio}</p>
                <button class="btn btn-primary" data-id="${plato.id}">Ordenar</button>
            </div>
        </div>
        `;
      //buscaba el botón por su atributo data-id
        let btnOrdenar = cartaComida.querySelector("[data-id]");
      //le añadiamos un listener
        btnOrdenar.addEventListener("click", function(evento){
          // console.log(evento.target.dataset.id)
          let platoObtenido = encontrarPlato(evento.target.dataset.id);
          // console.log(platoObtenido)
          agregarProductoACarrito(platoObtenido);
          crearBoleta(carritoCompras);
          console.table(carritoCompras);
        })

        arrCartas.push(cartaComida)
        // console.log(cartaComida)
    }
    return arrCartas;
}

function crearBoleta (carrito) {
  //limpiamos el contenido boleta section
  boletaSection.innerHTML = "";
  //dibujamos su contenido
  carrito.forEach(function(plato){
    let platoBoleta = document.createElement("div");
    platoBoleta.classList.add("d-flex");
    platoBoleta.classList.add("p-3");
    platoBoleta.classList.add("border");
    platoBoleta.classList.add("round");
    platoBoleta.classList.add("mb-3");
    platoBoleta.innerHTML = `
      <img src="https://picsum.photos/300" class="w-25 rounded me-3" alt="${plato.nombre}" />
      <div>
        <h5 class="text-primary fw-bold">${plato.nombre}</h5>
        <p>S/ ${plato.precio}</p>
        <div>
          <button class="btn btn-primary btn-sm"> - </button>
          <span>${plato.cantidad}</span>
          <button class="btn btn-primary btn-sm"> + </button>
        </div>
      </div>
    `;
    boletaSection.appendChild(platoBoleta);
  })
}

let platosCreados = crearCartasComida(platosPeruanos);
// console.log(platosCreados)
platosCreados.forEach(function(carta){
    platosSection.appendChild(carta);
});