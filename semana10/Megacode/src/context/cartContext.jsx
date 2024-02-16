import { createContext, useState, useEffect } from "react";
import { getStorage, saveStorage } from "../utils/localStorage";
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

    const totalCart = cart.reduce((acc, prod) => acc + prod.cantidad, 0);

    useEffect(() => {
        const storageCart = getStorage('cart');
        //agregamos la validación ya que en caso no haya en cart de LS no obtengamos un undefined o ""
        if(storageCart){
            setCart(storageCart);
        }
    },[]);

    useEffect(() => {
        if(cart.length > 0){
            saveStorage('cart', cart);
        }
    },[cart])

    // para poder crear el Provider que permitirá compartir contenido con todos los componentes, tenemos que crearlo a partir del Contexto Creado
    //y para pasar referencias con mi provider tendre que indicarlas como props
    return <CartContext.Provider value={{ cart, addProductToCart, totalCart }}>
        {/* Estamos utilizando props.children para poder pasar de forma transparente el contenido a renderizar */}
        {props.children}
    </CartContext.Provider>
}

//Tenemos que exportar el contexto para poder utilizarlo en otros componentes
//Y el Provider para poder acceder a lo que yo desee compartir con mis componentes
export { CartContext, CartContextProvider };