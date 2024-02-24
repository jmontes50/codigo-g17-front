import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Container from "../components/Container";
import ListProducts from "../components/ListProducts";

export default function Checkout() {

  const { cart } = useContext(CartContext);
  //donde tengo los datos, -> Context
  //como los obtengo? -> useContext
  //al obtenerlos los datos estan de la forma que necesito? -> yes
  //como los debo mostrar? -> como una lista, pero vamos a poner en un componente
  return (
    <Container>
      <h1>Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <ListProducts products={cart} />
        </div>
      </div>
      
    </Container>
  );
}
