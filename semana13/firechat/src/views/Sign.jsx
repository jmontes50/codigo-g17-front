import { createUser } from "../services/authService";

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
    <div className="container pt-4">
      <button className="btn btn-primary mx-auto" onClick={handleSign}>
        Ingresar con Google
      </button>
    </div>
  );
}
