import { useState } from "react"
import ShowColors from "./ShowColors";

export default function SelectColors({ colors, handleColor }) {
  const [color, setColor] = useState("#000000");

  const handleInputColor = () => {
    //Truthy y Falsy
    //Falsy false, null, undefined, 0, '', NaN
    //si es que no he seleccionado un color
    if (!color) {
      alert("Por favor ingresa un color");
      return;
    } //pero si ya seleccione un color
    handleColor(color);
  }

  return (
    <div className="mb-4">
      <div className="d-flex">
        <input
          type="color"
          value={color}
          onChange={e => setColor(e.target.value)}
          className="form-control form-control-color me-2"
        />
        <button
          type="button"
          onClick={handleInputColor}
          className="btn btn-dark"
        >
          Agregar Color
        </button>

      </div>
      <span>Colores Seleccionados</span>
      <ShowColors colors={colors} />
      <br />
    </div>
  )
}
