import useData from "../hooks/useAxios"
import ProductsSlice from "../components/ProductsSlice"

export default function AllProducts() {

    const { data, error, isLoading } = useData(`${import.meta.env.VITE_ENDPOINT_BASE}/productos`);
    
    if (isLoading) return <p>Cargando...</p>
    if (error) return <p>Error: {error.message}</p>

    // .slice(data.length - 5, data.length)

    return (
        <div className="xl:container xl:mx-auto py-6">
            <h1 className="text-3xl font-bold pb-3">
                Todos los Productos
            </h1>
            <ProductsSlice data={data} />
        </div>
    )
}
