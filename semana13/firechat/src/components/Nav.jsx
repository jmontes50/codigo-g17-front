import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../app/auth/authSlice";
import { OverlayTrigger, Popover } from "react-bootstrap";

export default function Nav() {
  const user = useSelector(selectUser);
  console.log(user);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Menu usuario</Popover.Header>
      <Popover.Body>
        <span>Cerrar sesión</span>        
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
              >
                <span className="text-white">{user.user}</span>
              </OverlayTrigger>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
