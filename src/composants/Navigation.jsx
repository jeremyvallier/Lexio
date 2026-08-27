import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/">
        Ma bibliothèque
      </NavLink>

      <NavLink to="/Preferences">
        Paramètres
      </NavLink>
    </nav>
  );
}