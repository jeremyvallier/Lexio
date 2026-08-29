import { usePreferences } from "../contextes/PreferencesContext";
import { useLangues } from "../contextes/LanguesContext";

// Composant permettant de choisir la largeur du contenu affiché dans la page de lecture.
export default function LargeurContenu() {
  // Récupère les préférences actuelles ainsi que la fonction permettant de modifier une préférence.
  const { preferences, modifierPreference } = usePreferences();
  // Récupère la fonction de traduction.
  const { t } = useLangues();
  // Appelée lorsqu'une largeur est sélectionnée.
  function changerLargeur(event) {
    // event.target.value contient la valeur du bouton radio sélectionné.
    // On enregistre cette valeur dans la préférence "contentWidth".
    modifierPreference("contentWidth", event.target.value);
  }

  return (
    <div className="largeur-contenu">

      <p>
        {t("settings.typography.contentWidth.label")}
      </p>
      {/* Option : largeur étroite */}
      <div className="btnlargeur">

        <div className="radios">
          <input
            type="radio"
            id="narrow"
            name="contentWidth"
            value="narrow"
            checked={preferences.contentWidth === "narrow"}
            onChange={changerLargeur}
          />

          <label htmlFor="narrow">
            {t("settings.typography.contentWidth.narrow")}
          </label>
        </div>

        {/* Option : largeur normale */}
        <div className="radios">
          <input
            type="radio"
            id="normal"
            name="contentWidth"
            value="normal"
            checked={preferences.contentWidth === "normal"}
            onChange={changerLargeur}
          />

          <label htmlFor="normal">
            {t("settings.typography.contentWidth.normal")}
          </label>
        </div>

        {/* Option : largeur large */}
        <div className="radios">
          <input
            type="radio"
            id="wide"
            name="contentWidth"
            value="wide"
            checked={preferences.contentWidth === "wide"}
            onChange={changerLargeur}
          />

          <label htmlFor="wide">
            {t("settings.typography.contentWidth.wide")}
          </label>
        </div>

      </div>
    </div>
  );
}