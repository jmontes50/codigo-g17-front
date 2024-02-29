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
  // const manejarSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("envio de form")
  // }

  const getDataSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <h1 className="text-2xl mb-4">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <ListProducts products={cart} />
        </div>
        <div>
          {/* form, al darle como argumento una nueva función a handleSubmit, esta nueva función recibira los datos de los input registrados */}
          <form onSubmit={handleSubmit(getDataSubmit)}>
            <div className="mb-3">
              <label
                htmlFor="nombreCompleto"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre Completo
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="nombreCompleto"
                  id="nombreCompleto"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("fullname", {
                    required: true,
                    minLength: 5,
                    maxLength: 40,
                  })}
                />
                {/* errors.nombrederegistro && muestre un elemento un mensaje si es que el error se dispara */}
                {errors.fullname?.type === "required" && (
                  <p>El nombre es obligatorio</p>
                )}
                {errors.fullname?.type === "minLength" && (
                  <p>El nombre debe tener al menos 5 caracteres</p>
                )}
                {errors.fullname?.type === "maxLength" && (
                  <p>El nombre debe tener menos de 40 caracteres</p>
                )}
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="dirección"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Dirección
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="dirección"
                  id="dirección"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("address")}
                />
              </div>
            </div>
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </Container>
  );
}
