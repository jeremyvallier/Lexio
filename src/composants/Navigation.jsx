//NavLink permet de créer un lien entre les différentes pages de l'application
import { NavLink } from "react-router-dom";
//icônes phosphors-icons
import { IoBookOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { PiShoppingCartLight } from "react-icons/pi";
// Composant qui affiche la navigation principale de l'application.
// Il est utilisé pour accéder à la bibliothèque et aux paramètres.
export default function Navigation() {
  return (
    <nav className="navigation">
      {/* Élément "Librairie".
        Ce n'est volontairement pas un NavLink car, selon la maquette,
        il s'agit d'un faux bouton qui représente la boutique/librairie.*/}
      <div className="caddie">
        <PiShoppingCartLight />
        <p>Librairie</p>
      </div>

      {/* NavLink permet de naviguer vers la page Bibliothèque.
        Contrairement à un lien HTML classique, React Router
        change la page affichée sans recharger toute l'application.*/}
      <NavLink to="/">
        <IoBookOutline />
        Ma bibliothèque
      </NavLink>

      {/* Navigation vers la page des paramètres.
        Le composant NavLink permet également de gérer
        automatiquement l'état du lien actif.*/}
      <NavLink to="/Preferences">
        <GoGear />
        Paramètres
      </NavLink>
    </nav>
  );
}