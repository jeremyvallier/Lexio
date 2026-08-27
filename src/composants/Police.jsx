import { usePreferences } from "../contextes/PreferencesContext";
import { useLangues } from "../contextes/LanguesContext";

// Composant permettant de choisir la police de lecture.
export default function Police() {
  const { preferences, modifierPreference } = usePreferences();
  const { t } = useLangues();

  function changerPolice(event) {
    modifierPreference("fontFamily", event.target.value);
  }

  return (
    <div className="police">
      <p>{t("settings.typography.fontFamily.label")}</p>

      <div className="btnpolice">

        <div className="radios">
          <input
            type="radio"
            id="serif"
            name="choixPolice"
            value="serif"
            checked={preferences.fontFamily === "serif"}
            onChange={changerPolice}
          />

          <label htmlFor="serif">
            {t("settings.typography.fontFamily.serif")}
          </label>
        </div>


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