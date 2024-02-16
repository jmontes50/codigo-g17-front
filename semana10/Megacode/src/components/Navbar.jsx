import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

export default function Navbar() {

  const { cart, totalCart } = useContext(CartContext);

  return (
    <nav className="bg-blue-700 p-4">
      <div className="flex justify-between items-center">
        <div className="container mx-auto">
          <h1 className="text-white text-2xl font-bold">MegaCode</h1>
          <div className="flex space-x-4">
            <Link to="/" className="text-white">
              Home
            </Link>
            <Link to="/products" className="text-white">
              Productos
            </Link>
          </div>
        </div>

        <div className="flex space-x-4 text-white">Carrito: {totalCart}</div>
      </div>
    </nav>
  );
}
