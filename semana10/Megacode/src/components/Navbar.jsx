import { useContext } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { CartContext } from "../context/cartContext";
import Badge from '@mui/material/Badge';

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
                    <Link
                      to="/"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white,
                          rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Home
                    </Link>
                    <Link
                      to="/products"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white,
                          rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Productos
                    </Link>
                    <Link
                      to="/checkout"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white,
                          rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Carrito
                    </Link>
                    <Link
                      to="/register"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white,
                          rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Registro
                    </Link>
                  </div>
                </div>
              </div>
              {/* derecha */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none"
                  >
                  <Badge badgeContent={totalCart} color="primary">
                    <i className="fa-solid fa-cart-shopping text-2xl text-gray-300"></i>
                  </Badge>
                </Link>
              </div>
            </div>
          </div>
          {/*  */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white, block 
                          rounded-md px-3 py-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-gray-300 hover:bg-gray-700 hover:text-white, block 
                          rounded-md px-3 py-2 text-sm font-medium"
              >
                Productos
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
