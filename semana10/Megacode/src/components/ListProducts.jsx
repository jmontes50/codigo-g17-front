export default function ListProducts({ products }) {
  //reduce iterará en cada item de products y acumulará la expresión que yo le de, en este caso
  //precio * cantidad, y finalmente retornará el total de la compra.
  const totalCompra = products.reduce(
    //como es un objeto tengo que darle 0 para que suma comience con el valor 0
    //porque por defecto suma, toma el primer valor de mi array, que en este caso es un objeto
    (suma, product) => suma + product.precio * product.cantidad,
    0
  );

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {products.length > 0 &&
        products.map((product) => (
          <li key={product.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={product.imagen}
                alt={product.nombre}
              />
              <div className="min-w-0 flex-auto">
                <h3 className="font-semibold leading-6 text-gray-900">
                  {product.nombre}
                </h3>
                <div className="flex mt-1 text-sm leading-6 text-gray-600">
                  <p>Color seleccionado: </p>
                  <div
                    className="mt-1 ms-1 rounded-full w-4 h-4"
                    style={{ backgroundColor: product.colorSelected }}
                  ></div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 font-semibold text-gray-900">
                Total: S/ {product.precio * product.cantidad}
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                P.U: S/ {product.precio}, Cant.: {product.cantidad} Unid.
              </p>
            </div>
          </li>
        ))}
      {/* Aquí aparte irá el total de la compra */}
      <li className="flex justify-between gap-x-6 py-5">
        <p className="font-bold text-lg">Total:</p>
        {/* toFixed para añadirle 02 decimales */}
        <p className="font-semibold text-lg">S/ {totalCompra.toFixed(2)}</p>
      </li>
    </ul>
  );
}
