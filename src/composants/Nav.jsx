import { NavLink } from "react-router-dom";

import { useLivres } from "../contextes/LivresContext";
import { IoIosArrowBack } from "react-icons/io";

// Navigation utilisée sur la page de lecture.
// Elle permet de revenir à la bibliothèque et affiche les informations du livre actuellement sélectionné.
export default function Nav() {
  // Récupère le livre actuellement ouvert depuis le contexte afin d'afficher son titre et son auteur.
  const { livreSelectionne } = useLivres();

  return (
    <div className="re">
       
       {/*NavLink permet de revenir à la bibliothèque.
        Contrairement à un lien HTML classique, React Router
        effectue la navigation sans recharger toute la page.*/}
      <NavLink to="/">
        <IoIosArrowBack />
      </NavLink>
         
       {/* Le bloc n'est affiché que si un livre est sélectionné.
        L'opérateur && permet d'afficher le contenu uniquement
        lorsque "livreSelectionne" existe.*/}
      {livreSelectionne && (
        <div className="infos-livre">
          <h1>{livreSelectionne.title}</h1>
          <h2>{livreSelectionne.author}</h2>
        </div>
      )}
    </div>
  );
}