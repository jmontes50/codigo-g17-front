import { createContext } from "react";
//crear un contexto que nos permita manejar los productos en el carrito

//Es una instanciación que me permite utilizar el context de react
const CartContext = createContext();

const CartContextProvider = (props) => {
    const value = 200;

    // para poder crear el Provider que permitirá compartir contenido con todos los componentes, tenemos que crearlo a partir del Contexto Creado
    //y para pasar referencias con mi provider tendre que indicarlas como props
    return <CartContext.Provider value={value}>
        {/* Estamos utilizando props.children para poder pasar de forma transparente el contenido a renderizar */}
        {props.children}
    </CartContext.Provider>
}

//Tenemos que exportar el contexto para poder utilizarlo en otros componentes
//Y el Provider para poder acceder a lo que yo desee compartir con mis componentes
export { CartContext, CartContextProvider };