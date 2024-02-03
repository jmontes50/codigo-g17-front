import { useState } from "react";

export default function ManageProduct() {
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    precio:0,
    imagen:"https://loremflickr.com/640/480/clothes",
    color:[],
    stock:0,
    review:[]
  })

  const changeForm = (evento) => {
    // console.log("NAME", evento.target.name)
    const copyStateForm = {
      ...form, //Spread Operator
      [evento.target.name]:evento.target.value
    }
    // console.log("COPYSTATEFORM", copyStateForm)
    setForm(copyStateForm)
  }

  const saveProduct = () => {
    console.log({ form })
  }

  return (
    <main className="container p-4">
        <h2>Crear Producto</h2>
        <form>
            <div className="mb-3">
                <label 
                    className="form-label" 
                    htmlFor="inputNombre"
                >
                    Nombre producto:
                </label>
                <input 
                    type="text"
                    placeholder="Camisa Negra"
                    id="inputNombre"
                    className="form-control"
                    value={form.nombre}
                    name="nombre"
                    onChange={(evento) => {changeForm(evento)}}
                />
            </div>
            <div className="mb-3">
                <label 
                    className="form-label" 
                    htmlFor="inputDescripcion"
                >
                    Descripción producto:
                </label>
                <input 
                    type="text"
                    placeholder="Camisa Negra de Tela texturada"
                    id="inputDescripcion"
                    className="form-control"
                    value={form.descripcion}
                    name="descripcion"
                    onChange={(evento) => {changeForm(evento)}}
                />
            </div>
            <div className="mb-3">
                <label 
                    className="form-label" 
                    htmlFor="inputPrecio"
                >
                    Precio producto:
                </label>
                <input 
                    type="number"
                    placeholder="100"
                    id="inputPrecio"
                    className="form-control"
                    value={form.precio}
                    name="precio"
                    onChange={(evento) => {changeForm(evento)}}
                />
            </div>
            <div className="mb-3">
                <label 
                    className="form-label" 
                    htmlFor="inputStock"
                >
                    Stock producto:
                </label>
                <input 
                    type="number"
                    placeholder="150"
                    id="inputStock"
                    className="form-control"
                    value={form.stock}
                    name="stock"
                    onChange={(evento) => {changeForm(evento)}}
                />
            </div>
            <button
              className="btn btn-primary btn-lg"
              type="button"
              onClick={saveProduct}
            >
              Guardar
            </button>
        </form>
    </main>
  )
}
