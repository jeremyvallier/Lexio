import { useLivres } from "../contextes/LivresContext";
import { useLangues } from "../contextes/LanguesContext";
import { CiSearch } from "react-icons/ci";

export default function Formulaire() {

  // Récupère depuis LivresContext :
  // - recherche : le texte actuellement saisi dans la recherche
  // - modifierRecherche : la fonction qui permet de modifier ce texte
  const {
    recherche,
    modifierRecherche,
  } = useLivres();

  // Récupère la fonction de traduction pour afficher
  // le texte dans la langue sélectionnée par l'utilisateur.
  const { t } = useLangues();

  // Fonction appelée lors de la validation du formulaire.
  // preventDefault() empêche le navigateur de recharger la page lorsque le formulaire est soumis.
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form
      className="formulaire"
      onSubmit={handleSubmit}
      role="search"
    >
      <input
        className="champrecherche"
        type="search"
        name="rechlivre"
        id="rechlivre"
        // La valeur du champ est contrôlée par l'état "recherche" provenant du LivresContext.
        value={recherche}
        // À chaque modification du champ, on récupère la nouvelle valeur saisie et on la transmet au Context.
        onChange={(event) =>
          modifierRecherche(event.target.value)
        }
        // Le placeholder est traduit selon la langue sélectionnée.
        placeholder={t("nav.search")}
      />
      {/*non utile car les résultats de recherche s'affichent au fur et à mesure de la chaîne de caractère saisie dans le champ du formulaire 
      Le bouton sert principalement d'interface visuelle*/}
     <button
        type="submit"
        className="btnform"
        aria-label={t("nav.search")}
      >
        <CiSearch className="loupe"/>
      </button>
    </form>
  );
}