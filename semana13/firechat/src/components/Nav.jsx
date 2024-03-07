import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../app/auth/authSlice";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { logoutUser } from "../services/authService";

export default function Nav() {
  const [showPopover, setShowPopover] = useState(false)

  const user = useSelector(selectUser);
  
  const handleLogout = async () => {
    try {
      await logoutUser();
      alert("Sesión cerrada!")
      setShowPopover(false)
    } catch (error) {
      alert("Error al salir")
      setShowPopover(false)
    }
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">
        Menu usuario
      </Popover.Header>
      <Popover.Body>
        <button className="btn btn-sm btn-primary" onClick={handleLogout}>Cerrar sesión</button>
      </Popover.Body>
    </Popover>
  );

  return (
    <nav className="navbar bg-dark border-bottom border-body">
      <div className="container-fluid">
        <div className="me-auto">
          <Link className="navbar-brand text-white" to="/">
            FireChat
          </Link>
        </div>
        <div>
          {user && (
            <>
              <img
                src={user.photo}
                alt={user.user}
                className="rounded-circle me-1"
                style={{ height: "28px" }}
              />
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={popover}
                show={showPopover}
              >
                <span className="text-white" onClick={() => {setShowPopover(!showPopover)}}>
                  {user.user}
                </span>
              </OverlayTrigger>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
