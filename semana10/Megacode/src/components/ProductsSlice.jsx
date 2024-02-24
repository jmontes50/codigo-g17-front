import { Link } from "react-router-dom";
import useData from "../hooks/useAxios";
import ProductCard from "./ProductCard";

export default function ProductsSlice({ data, columns = 4 }) {
  //data serán unos props más donde yo de una array y en base a ese array busque dibujar mis productos
  return (
    <section className="container mx-auto p-4">
      <div className="mb-3 flex justify-between">
        <h2 className="text-lg font-semibold border-b-2 border-blue-500">
          Productos seleccionados:
        </h2>
        <Link to="/products" className="text-gray-500 font-semibold">
          Ver más
          <span className="text-blue-500">{" > "}</span>
        </Link>
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-${columns - 2} md:grid-cols-${
          columns - 1
        } lg:grid-cols-${columns} xl:grid-cols-5 gap-4`}
      >
        {data.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
