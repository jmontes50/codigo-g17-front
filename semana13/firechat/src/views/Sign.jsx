import { createUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function Sign() {

  const navigate = useNavigate()

  const handleSign = async () => {
    try {
      const user = await createUser();
      navigate(`/chat`)
      // console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
