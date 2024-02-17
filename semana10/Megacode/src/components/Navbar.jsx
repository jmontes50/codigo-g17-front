import { useContext } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { CartContext } from "../context/cartContext";

export default function Navbar() {

  const { totalCart } = useContext(CartContext);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Botón Mobile */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Abrir Menu</span>
                  {open ? (
                    <i className="fa-solid fa-xmark"></i>
                  ) : (
                    <i className="fa-solid fa-bars"></i>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* logo */}
                <div className="flex flex-shrink-0 items-center">
                  <h2 className="text-slate-900 font-bold text-3xl sm:text-4xl lg:text-4xl tracking-tight text-center dark:text-white">
                    Store
                  </h2>
                </div>
                {/* itemsDiv */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/* items */}
                      <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white,
                          rounded-md px-3 py-2 text-sm font-medium"
                      >
                        Home
                      </Link>
                      <Link to="/products" className="text-gray-300 hover:bg-gray-700 hover:text-white,
                          rounded-md px-3 py-2 text-sm font-medium"
                      >
                        Productos
                      </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>



    /*
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
    */
  );
  
}
