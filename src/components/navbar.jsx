import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
export function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <Link to="/" className="nav-link">
            Main Page
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">
            <ShoppingCart />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
