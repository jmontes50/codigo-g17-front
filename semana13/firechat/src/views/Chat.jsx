import { useSelector } from "react-redux";
import { selectUser } from "../app/auth/authSlice";

export default function Chat() {
  const user = useSelector(selectUser);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1>Chat</h1>
        </div>
        <div className="col-12 col-md-6 bg-gray"></div>
        <div className="col-12 col-md-6 border border-secondary-subtle rounded p-4">
          <div>
            <h5 className="pb-3">{user.user}</h5>
          </div>
          <div className="d-flex flex-column p-2">
            <div className="align-self-start d-flex mb-3">
              <img
                className="rounded-circle me-2"
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1930204137.1709683200&semt=ais"
                alt="..."
                style={{ height: "50px" }}
              />
              <div className="border border-info rounded p-2">
                <small className="text-secondary">Juan Perez</small>
                <br />
                Mensaje
              </div>
            </div>

            <div className="align-self-end d-flex mb-3 text-end">
              <div className="border border-info bg-info p-2 text-dark bg-opacity-75 rounded">
              <small className="text-secondary">{user.user}</small>
                <br />
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <img
                className="rounded-circle ms-2 mb-2"
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1930204137.1709683200&semt=ais"
                alt="..."
                style={{ height: "50px" }}
              />
            </div>
          </div>
        </div>
      </div>
      "
    </div>
  );
}
