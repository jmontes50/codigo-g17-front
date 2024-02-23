import { useState, useEffect } from "react";
import useData from "../hooks/useAxios";
import ProductsSlice from "../components/ProductsSlice";
import Container from "../components/Container";
import Slider from "@mui/material/Slider";
import { filterDataByPrice, filterDataByCategories } from "../utils/changeData";

export default function AllProducts() {
  const [price, setPrice] = useState([1, 10000]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({
    Hombre: false,
    Mujer: false,
    Accesorios: false,
    Deporte: false,
  });

  const { data, error, isLoading } = useData(
    `${import.meta.env.VITE_ENDPOINT_BASE}/productos`
  );

  const handlePrice = (event, newValue) => {
    setPrice(newValue);
  };

  const handleCategories = (event) => {
    // console.log(event.target);
    const { name, checked } = event.target;
    setCategories({
      ...categories,
      [name]: checked,
    });
  };

  const handleFilter = () => {
    console.log({ categories })
    const categoriesEntries = Object.entries(categories);
    console.log({ categoriesEntries });
    
    const categoriesTransformed = categoriesEntries.map(
      (category) => {
        //recordemos que las entries es un arreglo con la [nombre, valor] en nuestro caso ["Hombre", true]
        if(category[1] === true){
          return category[0];
        }
      }
    );
    console.log({ categoriesTransformed });
      //despues de haber transformado solamente quedate con los que sean truthy, que no sean ni false, undefined o null
    const categoriesSelected = categoriesTransformed.filter((cat) => cat)
    console.log({ categoriesSelected });

    // console.log({ categoriesSelected });
    const filteredData = filterDataByCategories(products, categoriesSelected);
    console.log({ filteredData });
    setProducts(filteredData);
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
            {/* {console.log("check", categories.Hombre)} */}
            <input
              id="hombre-categoria"
              name="Hombre"
              checked={categories.Hombre}
              onChange={(e) => {
                handleCategories(e);
              }}
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="hombre-categoria"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              Hombre
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="mujer-categoria"
              type="checkbox"
              name="Mujer"
              checked={categories.Mujer}
              onChange={(e) => {
                handleCategories(e);
              }}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="mujer-categoria"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              Mujer
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="accesorios-categoria"
              type="checkbox"
              name="Accesorios"
              checked={categories.Accesorios}
              onChange={(e) => {
                handleCategories(e);
              }}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="accesorios-categoria"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              Accesorios
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="deporte-categoria"
              type="checkbox"
              name="Deporte"
              checked={categories.Deporte}
              onChange={(e) => {
                handleCategories(e);
              }}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="deporte-categoria"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              Deporte
            </label>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleFilter}
          >
            Filtrar
          </button>
        </div>
        {/* contenido */}
        <div className="col-span-12 md:col-span-9">
          <ProductsSlice data={products} columns={3} />
        </div>
      </div>
    </Container>
  );
}
