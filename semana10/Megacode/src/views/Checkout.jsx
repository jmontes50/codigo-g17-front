import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Container from "../components/Container";
import ListProducts from "../components/ListProducts";
import { useForm } from "react-hook-form";

export default function Checkout() {
  const {
    register, //para registrar que inputs va a manejar react-hook-forms
    handleSubmit, //para manejar el submit del formulario react-hook-forms
    formState: { errors }, // errors, para segun la validación que indiquemos se nos muestre un error adecuado
    watch, //para escuchar cambios en los inputs react-hook-forms
  } = useForm();

  const { cart } = useContext(CartContext);
  //donde tengo los datos, -> Context
  //como los obtengo? -> useContext
  //al obtenerlos los datos estan de la forma que necesito? -> yes
  //como los debo mostrar? -> como una lista, pero vamos a poner en un componente

  // en el caso de los formularios sucede que su evento por defecto es recargarse para prevenir esto, usamos un e.preventDefault();
  const manejarSubmit = (e) => {
    e.preventDefault();
    console.log("envio de form")
  }

  return (
    <Container>
      <h1>Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <ListProducts products={cart} />
        </div>
        <div>{/* form */}
          <form onSubmit={manejarSubmit}>
            <input type="text" placeholder="Nombre" />
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </Container>
  );
}
