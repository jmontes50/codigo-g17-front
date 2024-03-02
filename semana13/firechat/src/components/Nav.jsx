import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar bg-dark border-bottom border-body">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          FireChat
        </Link>
      </div>
    </nav>
  );
}
