import { useState } from "react"
import ShowColors from "./ShowColors";

export default function SelectColors({ colors, handleColor }) {
    const [color, setColor] = useState("");
    
  return (
    <div>
        <input 
            type="color" 
            value={color}
            onChange={e => setColor(e.target.value)}
        />
        <button type="button" onClick={() => handleColor([...colors, color])}>
            Agregar Color
        </button>
        <ShowColors colors={colors} />
    </div>
  )
}
