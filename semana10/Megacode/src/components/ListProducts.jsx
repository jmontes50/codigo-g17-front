export default function ListProducts({ products }) {
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
                  <p>Color seleccionado:{" "}</p>
                  <div
                    className="mt-1 ms-1 rounded-full w-4 h-4"
                    style={{ backgroundColor: product.colorSelected }}
                  ></div>
                </div>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
}
