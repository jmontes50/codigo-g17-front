export default function ProductCard({
  product: { nombre, precio, stock, imagen }
}) {
  return (
    // card
    <div className="bg-gray-200 p-4 rounded-md">
      {/* parte superior, la imagen */}
      <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg relative">
        <img
          src={imagen}
          className="w-full h-64 object-cover"
          alt={nombre}
        />
        <div className="absolute top-0 right-0 bg-blue-500 text-white p-2">
          {stock} Unid.
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-md font-semibold mb-2">{nombre}</h4>
        <p className="text-sm text-gray-600">Precio: S/ {precio}</p>
      </div>
    </div>
  )
}
