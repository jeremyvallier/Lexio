import { usePreferences } from "../contextes/PreferencesContext";
import { useLangues } from "../contextes/LanguesContext";

// Composant permettant de choisir la police de lecture.
export default function Police() {
  // Récupère les préférences actuelles ainsi que la fonction permettant de modifier une préférence.
  const { preferences, modifierPreference } = usePreferences();
  // Récupère la fonction de traduction.
  const { t } = useLangues();

  // Fonction appelée lorsqu'une police est sélectionnée.
  function changerPolice(event) {
    // event.target.value contient la valeur de la police choisie.
    // On transmet cette valeur au PreferencesContext.
    modifierPreference("fontFamily", event.target.value);
  }

  return (
    <div className="police">
      {/* Libellé du réglage, traduit selon la langue sélectionnée. */}
      <p>{t("settings.typography.fontFamily.label")}</p>

      <div className="btnpolice">

        {/* Choix de la police Serif. */}
        <div className="radios">
          <input
            type="radio"
            id="serif"
            name="choixPolice"
            value="serif"
            // Le bouton est sélectionné si la police actuelle enregistrée dans les préférences est "serif".
            checked={preferences.fontFamily === "serif"}
            onChange={changerPolice}
          />

          <label htmlFor="serif">
            {t("settings.typography.fontFamily.serif")}
          </label>
        </div>

        {/* Choix de la police sans-serif. */}
        <div className="radios">
          <input
            type="radio"
            id="sansserif"
            name="choixPolice"
            value="sansSerif"
            checked={preferences.fontFamily === "sansSerif"}
            onChange={changerPolice}
          />

          <label htmlFor="sansserif">
            {t("settings.typography.fontFamily.sansSerif")}
          </label>
        </div>

        {/* Choix de la police OpenDys. */}
        <div className="radios">
          <input
            type="radio"
            id="opendys"
            name="choixPolice"
            value="openDys"
            checked={preferences.fontFamily === "openDys"}
            onChange={changerPolice}
          />

          <label htmlFor="opendys">
            {t("settings.typography.fontFamily.openDys")}
          </label>
        </div>

      </div>
    </div>
  );
}