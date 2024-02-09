import { useState } from "react"
import ShowColors from "./ShowColors";

export default function SelectColors({ colors, handleColor }) {
  const [color, setColor] = useState("");

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
          onClick={() => handleColor(color)}
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
