import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar bg-dark border-bottom border-body">
            <div className="container">
                <Link to='/' className="navbar-brand text-light">
                    Administrador
                </Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link
                            to='/crearproducto'
                            className="nav-link text-light"
                        >
                            Nuevo Producto
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
