import ProductsSlice from "../components/ProductsSlice"
import useData from "../hooks/useAxios"

export default function Home() {

    const { data, error, isLoading } = useData(`${import.meta.env.VITE_ENDPOINT_BASE}/productos`);
    
    if (isLoading) return <p>Cargando...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <>
            <h1>Home</h1>
            <ProductsSlice data={data.slice(data.length - 5, data.length)} />
        </>
    )
}
