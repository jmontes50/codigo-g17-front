import Container from "../components/Container";
export default function Register() {
  return (
    <Container>
      <div className="lg:w-2/6 md:w-1/2 bg-gray-400 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-8 md:mt-10 mx-auto">
        <h2 className="text-dark text-lg font-medium title-font mb-5">
          Registrate
        </h2>
        <div className="relative mb-4">
          <label
            htmlFor="email"
            className="leading-7 text-sm text-gray-700"
          >
            Correo electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white focus:ring-2 focus:ring-blue-600 rounded border border-gray-600 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full bg-white focus:ring-2 focus:ring-blue-700 rounded border border-gray-600 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Registrarse
        </button>
        <p className="text-xs mt-3">
          *La contraseña debe ser de al menos 6 caracteres.
        </p>
      </div>
    </Container>
  );
}
