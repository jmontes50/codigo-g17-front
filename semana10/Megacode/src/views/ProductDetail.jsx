import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { useParams } from "react-router-dom";
import useData from "../hooks/useAxios";

export default function ProductDetail() {
  const { id } = useParams();
  //data solo representa un producto
  const { data, error, loading } = useData(
    `${import.meta.env.VITE_ENDPOINT_BASE}/productos/${id}`
  );

  const { cart, addProductToCart } = useContext(CartContext);

  return (
    <>
    {/* temporal */}
      <div>carrito: {cart.map((item, i) => (<span key={i}>{item.nombre}</span>))}</div>
      {/*  */}
      <div className="w-75 mx-auto py-6 grid grid-cols-1 md:grid-cols-2">
        <img src={data.imagen} alt={data.nombre} className="w-full" />
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-2">{data.nombre}</h2>
          <div className="grid grid-cols-2 my-5">
            <span className="text-gray-600">
              SKU:<b className="font-semibold text-black">######</b>
            </span>
            <span className="text-gray-600">
              Disponibilidad:
              <b className="font-semibold text-green-500">Disponible</b>
            </span>
            <span className="text-gray-600">
              Marca:
              <b className="font-semibold text-black">Estándar</b>
            </span>
            <span className="text-gray-600">
              Categoría:
              <b className="font-semibold text-black">Ropa</b>
            </span>
          </div>
          <h3>Descripción:</h3>
          <p className="text-gray-600">{data.descripcion}</p>
          <p className="text-blue-600 text-xl">Precio: S/ {data.precio}</p>
          <p className="text-blue-600 text-xl">Stock: {data.stock}</p>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            onClick={() => addProductToCart(data)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
}
