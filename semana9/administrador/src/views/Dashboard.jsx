import { useState, useEffect } from "react"
import axios from "axios";

export default function Dashboard() {
    const [productos, setProductos] = useState([])
    /**
     * 1. de donde vamos a obtener esos datos
     * 2. esos datos estan en el formato que necesito
     * 2.1 transformalo
     * 3. mostrar esos datos
     */
    const showColores = (colores, i) => colores.map((color) => {
        return (<span key={i}
            className="badge rounded-pill mx-1" 
            style={{backgroundColor:`${color}`}}>
                -
        </span>
        )
    })

    useEffect(() => {
        axios.get('https://616b5ead16c3fa001717167c.mockapi.io/productos')
        .then((rpta) => {
            console.table('RPTA', rpta.data)
            setProductos(rpta.data)
        })
        .catch((err) => {
            console.error(err)
        })
    }, [])
  return (
    <table className="table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Colores</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {productos.map((prod) => (
                <tr key={prod.id}>
                    <td>{prod.nombre}</td>
                    <td>{prod.descripcion}</td>
                    <td>{showColores(prod.color)}</td>
                    <td>S/ {prod.precio}</td>
                    <td>{prod.stock}</td>
                    <td></td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}
