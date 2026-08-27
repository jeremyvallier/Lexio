import { useLivres } from "../contextes/LivresContext";
import { useLangues } from "../contextes/LanguesContext";

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
      <label
        htmlFor="rechlivre"
        className="sr-only"
      >
        {t("nav.search")}
      </label>

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
        🔍
      </button>
    </form>
  );
}