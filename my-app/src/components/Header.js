import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-3">
      <Link className="navbar-brand" to="/">My Portfolio</Link>
      <ul className="navbar-nav ms-auto d-flex flex-row">
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
