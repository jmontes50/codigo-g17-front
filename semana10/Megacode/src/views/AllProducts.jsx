import { useState, useEffect } from "react";
import useData from "../hooks/useAxios";
import ProductsSlice from "../components/ProductsSlice";
import Container from "../components/Container";
import Slider from "@mui/material/Slider";
import { filterDataByPrice } from "../utils/changeData";

export default function AllProducts() {
  const [price, setPrice] = useState([1, 10000]);
  const [products, setProducts] = useState([]);

  const { data, error, isLoading } = useData(
    `${import.meta.env.VITE_ENDPOINT_BASE}/productos`
  );

  const handlePrice = (event, newValue) => {
    setPrice(newValue);
  };

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  useEffect(() => {
    setProducts(data);
  }, [data]);

  useEffect(() => {
    const filteredData = filterDataByPrice(data, price[0], price[1]);
    setProducts(filteredData);
  }, [price]);

  return (
    <Container>
      <h1 className="text-3xl font-bold pb-3">Todos los Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* filtroa */}
        <div className="col-span-12 md:col-span-3">
          <h3 className="text-lg font-semibold border-b-2 border-blue-500 mt-4">
            Filtros:
          </h3>
          <h4 className="text-md font-semibold mt-3">Precio:</h4>
          <Slider
            getAriaLabel={() => "Precio"}
            value={price}
            onChange={handlePrice}
            valueLabelDisplay="auto"
            min={1}
            max={200}
          />
          <h4 className="text-md font-semibold mt-3">Categorías:</h4>
          <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900">Hombre</label>
        </div>
        </div>
        {/* contenido */}
        <div className="col-span-12 md:col-span-9">
          <ProductsSlice data={products} columns={3} />
        </div>
      </div>
    </Container>
  );
}
