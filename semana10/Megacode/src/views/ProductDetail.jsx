import { useContext } from "react";
import useData from "../hooks/useAxios";
import { CartContext } from "../context/cartContext";
import { useParams } from "react-router-dom";
import ReactImageMagnifier from 'simple-image-magnifier/react'
import Container from "../components/Container";

export default function ProductDetail() {
  const { id } = useParams();
  //data solo representa un producto
  const { data, error, loading } = useData(
    `${import.meta.env.VITE_ENDPOINT_BASE}/productos/${id}`
  );

  const { addProductToCart } = useContext(CartContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} </p>;


  return (
    <>
      <Container>
        <div className="w-75 mx-auto py-6 grid grid-cols-1 md:grid-cols-2">
          <ReactImageMagnifier
            srcPreview={data.imagen}
            srcOriginal={data.imagen}
            width={600}
            className='max-w-xs bg-gray-200 rounded-lg md:max-w-none max-h-80 md:max-h-none mx-auto'
          />
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
            <h3 className="font-semibold text-dark">Descripción:</h3>
            <p className="text-gray-600 mb-2">{data.descripcion}</p>
            <p className="text-blue-600 text-xl mb-2">Precio: S/ {data.precio}</p>
            <p className="text-gray-500 text-lg mb-2">Stock: {data.stock}</p>
            <h3 className="font-semibold text-dark mb-1">Color:</h3>
            {data.color ? data.color.map((color) => (
              <span 
                key={color} 
                className="inline-block w-6 h-6 mr-2 rounded-full" 
                style={{backgroundColor: color}}></span>
            )) : null}
            <br />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
              onClick={() => addProductToCart(data)}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
