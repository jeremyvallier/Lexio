import { NavLink } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { PiShoppingCartLight } from "react-icons/pi";
export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="caddie">
        <PiShoppingCartLight />
        <p>Librairie</p>
      </div>

      <NavLink to="/">
        <IoBookOutline />
        Ma bibliothèque
      </NavLink>

      <NavLink to="/Preferences">
        <GoGear />
        Paramètres
      </NavLink>
    </nav>
  );
}