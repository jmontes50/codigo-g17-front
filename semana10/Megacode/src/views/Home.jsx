import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import ProductsSlice from "../components/ProductsSlice"
import useData from "../hooks/useAxios"
import Container from "../components/Container";

export default function Home() {

    const shared = useContext(CartContext);
    console.log(shared);

    const { data, error, isLoading } = useData(`${import.meta.env.VITE_ENDPOINT_BASE}/productos`);
    
    if (isLoading) return <p>Cargando...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <>
            <h1>Home</h1>
            <Container>
                <ProductsSlice data={data.slice(data.length - 5, data.length)} />
            </Container>
        </>
    )
}
