import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../app/auth/authSlice";

export default function Nav() {
  const user = useSelector(selectUser);
  console.log(user);

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
              <span className="text-white">{user.user}</span>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
