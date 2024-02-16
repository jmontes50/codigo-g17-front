import { createContext, useState, useEffect} from "react";
//crear un contexto que nos permita manejar los productos en el carrito

//Es una instanciación que me permite utilizar el context de react
const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addProductToCart = (product) => {
        const existsIndex = cart.findIndex(prod => prod.id === product.id)
        //si no existe el producto en el carrito, lo agrego
        if(existsIndex === -1){
            product.cantidad = 1;
            setCart([...cart, product]);
        }else{
            if(Number(product.stock) === cart[existsIndex].cantidad){
                //si el stock es igual a la cantidad, no lo agrego, hago directamente un return
                return;
            }
            //en caso no exista, hago una copia de cart en copyCart, incremento la cantidad del producto en +1 y actualizo cart con la copia modificada
            const copyCart = [...cart];
            copyCart[existsIndex].cantidad++;
            setCart(copyCart);
        }
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