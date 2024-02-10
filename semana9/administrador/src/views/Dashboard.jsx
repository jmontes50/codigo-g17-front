import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import ShowColors from "../components/ShowColors";
import { deleteProduct, getProducts } from "../services/productService";
import Swal from "sweetalert2";

export default function Dashboard() {
  const [productos, setProductos] = useState([])
  /**
   * 1. de donde vamos a obtener esos datos
   * 2. esos datos estan en el formato que necesito
   * 2.1 transformalo
   * 3. mostrar esos datos
   */
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Está seguro de eliminar el producto?',
      text: "Esta acción es irreversible",
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Sí, Eliminar",
      cancelButtonText: "No, Cancelar"
    })
      .then((result) => {
        if (result.isConfirmed) {
          return deleteProduct(id);
          //La acción de cancelar la captura is dismissed
        } else if (result.isDismissed) {
          //para detener el flujo del encadenamiento forzamos un error
          throw new Error("Acción cancelada")
        }
      })
      .then((response) => {
        console.log(response)
        return Swal.fire({
          icon: 'success',
          title: 'Producto Eliminado',
        })
        //filtra los productos que no coincidan con el id recibido a eliminar
      })
      .then(() => {
        // const productosActualizados = productos.filter((prod) => prod.id !== id);
        // setProductos(productosActualizados)
        //cuando eliminamos el producto volvermos a pedir los datos, hacemos una nueva petición
        return getProducts()
      })
      .then((response) => {
        //ya con los datos los mostremos de nuevo actualizados
        setProductos(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }


  useEffect(() => {
    getProducts()
      .then((response) => {
        setProductos(response)
      }).catch(err => console.log(err))
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
