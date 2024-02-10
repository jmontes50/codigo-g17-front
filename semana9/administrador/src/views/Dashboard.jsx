import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import ShowColors from "../components/ShowColors";
import { deleteProduct } from "../services/productService";

export default function Dashboard() {
  const [productos, setProductos] = useState([])
  /**
   * 1. de donde vamos a obtener esos datos
   * 2. esos datos estan en el formato que necesito
   * 2.1 transformalo
   * 3. mostrar esos datos
   */
  const handleDelete = (id) => {
    deleteProduct(id)
      .then((response) => {
        console.log(response)
        // setProductos(productos.filter((prod) => prod.id !== id))
      })
      .catch((error) => {
        console.log(error)
      })
  }


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
    <>
      <div className="container p-4">
        <div className="d-flex justify-content-between py-4">
          <h1>Productos</h1>
          <Link to="/crearproducto">
            <button className="btn btn-dark">
              Crear Producto
            </button>
          </Link>
        </div>
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
                <td><ShowColors colors={prod.color} /></td>
                <td>S/ {prod.precio}</td>
                <td>{prod.stock}</td>
                <td>
                  <Link
                    to={`/producto/${prod.id}`}
                    className="btn btn-primary btn-sm me-2"
                  >
                    <i className="fa-solid fa-pen"></i>
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(prod.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
