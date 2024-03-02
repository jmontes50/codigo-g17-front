import { createUser } from "../services/authService";
import Nav from "../components/Nav";

export default function Sign() {
  const handleSign = async () => {
    try {
      const user = await createUser();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Nav />
      <div className="container pt-4">
        <div className="card mx-auto" style={{width:'400px'}}>
          <img
            className="card-img-top"
            src="https://img.freepik.com/vector-gratis/ilustracion-concepto-inicio-sesion_114360-739.jpg"
            alt=" Imagen de storyset en Freepik"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Ingresa al chat</h5>
            <button className="btn btn-info mx-auto" onClick={handleSign}>
              <i className="fa-brands fa-google me-2"></i>Ingresar con Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
