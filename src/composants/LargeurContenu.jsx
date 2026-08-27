import { usePreferences } from "../contextes/PreferencesContext";
import { useLangues } from "../contextes/LanguesContext";

export default function LargeurContenu() {
  const { preferences, modifierPreference } = usePreferences();
  const { t } = useLangues();

  function changerLargeur(event) {
    modifierPreference("contentWidth", event.target.value);
  }

  return (
    <div className="largeur-contenu">

      <p>
        {t("settings.typography.contentWidth.label")}
      </p>

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