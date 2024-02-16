import { createContext, useState, useEffect} from "react";
//crear un contexto que nos permita manejar los productos en el carrito

//Es una instanciación que me permite utilizar el context de react
const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addProductToCart = (product) => {
        setCart([...cart, product]);
    }

    // para poder crear el Provider que permitirá compartir contenido con todos los componentes, tenemos que crearlo a partir del Contexto Creado
    //y para pasar referencias con mi provider tendre que indicarlas como props
    return <CartContext.Provider value={{ cart, addProductToCart }}>
        {/* Estamos utilizando props.children para poder pasar de forma transparente el contenido a renderizar */}
        {props.children}
    </CartContext.Provider>
}

//Tenemos que exportar el contexto para poder utilizarlo en otros componentes
//Y el Provider para poder acceder a lo que yo desee compartir con mis componentes
export { CartContext, CartContextProvider };