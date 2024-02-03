import { Link } from "react-router-dom"

export default function Navigate() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contacto">Contact</Link></li>
            <li><Link to="/detalles/123">Detalle</Link></li>
        </ul>
    </nav>
  )
}
