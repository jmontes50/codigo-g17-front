import "./App.css";
//cuando importamos algo de JS o JSX, no es necesario agregarle la extensión, si es algo diferente si es imperativo
import Mensaje from "./components/Mensaje";
import Contador from "./components/Contador";
//un componente no es más que una función
//El nombre de la función que representa el componente
//1. El nombre tiene que estar en Mayúsculas
function App() {
  const titulo = "Mi primera app";
  //3. esta función/componente Tiene que retornar un JSX
  return (
    //4 solamente podemos retornar UN solo elemento de JSX
    <>
      <h1>{titulo}</h1>
      <section>
        <h2 className="red">Holaaaaaaaaaaa</h2>
        <Contador />
        {/* Props */}
        <Mensaje 
          propsTitulo={titulo} 
          numero="1"
        />
        <Mensaje />
        <Mensaje />
        {/* Siempre que deseemos poner codigo de JS dentro de JSX voy a tener que abrir {} y adentro poner una expresión de JS*/}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          ipsum id minima impedit numquam debitis qui. Resultado: {2 + 6}
        </p>
        <div>
          <label htmlFor="idNombre">Nombre:</label>
          <input type="text" id="idNombre" />
        </div>
      </section>
      {/* Toda etiqueta ya sea de html o de un componente debe estar cerrada o con su etiqueta de cierre */}
      <hr />
    </>
  );
}

//2. exportar esta función
export default App;
