//Ya no es obligatorio en importar React en c/componente
//En algunas versiones de librerias como 
//react Native si es necesario
//import React from "react"; 
const Mensaje = (props) => {
    console.log("PROPS: ", props)
    return (
        // estas llaves de html que aparentan ser vacias
        // se conocen como Fragment, funciona como un 
        // contenedor pero que no se va a renderizar
        <>
            <p>
                Mensaje: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet commodi porro, sint repellat reiciendis non earum fugiat rerum velit in animi vitae incidunt placeat nisi! Sapiente amet est fugiat architecto.
            </p>
        </>
    )
}

export default Mensaje;