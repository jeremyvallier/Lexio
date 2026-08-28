import { useLivres } from "../contextes/LivresContext";
import { useLangues } from "../contextes/LanguesContext";
import { CiSearch } from "react-icons/ci";
export default function Formulaire() {
  const {
    recherche,
    modifierRecherche,
  } = useLivres();

  const { t } = useLangues();

  // Empêche le rechargement de la page lors du submit
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
        value={recherche}
        onChange={(event) =>
          modifierRecherche(event.target.value)
        }
        placeholder={t("nav.search")}
      />

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