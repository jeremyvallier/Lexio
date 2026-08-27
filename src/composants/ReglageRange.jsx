import { usePreferences } from "../contextes/PreferencesContext";
import { useLangues } from "../contextes/LanguesContext";

export default function ReglageRange() {
  const { preferences, modifierPreference } = usePreferences();
  const { t } = useLangues();

  function changerReglage(event) {
    const { name, value } = event.target;

    modifierPreference(name, Number(value));
  }

  return (
    <div className="ranges">

      {/* Taille du texte */}
      <div className="range">
        <label htmlFor="fontSize">
          {t("settings.typography.fontSize")}
        </label>

        <div className="range-valeur">
          <input
            type="range"
            id="fontSize"
            name="fontSize"
            min="12"
            max="32"
            step="1"
            value={preferences.fontSize}
            onChange={changerReglage}
          />

          <span>{preferences.fontSize}px</span>
        </div>
      </div>


      {/* Interlignage */}
      <div className="range">
        <label htmlFor="lineHeight">
          {t("settings.typography.lineHeight")}
        </label>

        <div className="range-valeur">
          <input
            type="range"
            id="lineHeight"
            name="lineHeight"
            min="1"
            max="2.5"
            step="0.1"
            value={preferences.lineHeight}
            onChange={changerReglage}
          />

          <span>{preferences.lineHeight}</span>
        </div>
      </div>


      {/* Espacement des caractères */}
      <div className="range">
        <label htmlFor="letterSpacing">
          {t("settings.typography.letterSpacing")}
        </label>

        <div className="range-valeur">
          <input
            type="range"
            id="letterSpacing"
            name="letterSpacing"
            min="0"
            max="5"
            step="0.1"
            value={preferences.letterSpacing}
            onChange={changerReglage}
          />

          <span>{preferences.letterSpacing}px</span>
        </div>
      </div>


      {/* Espacement des mots */}
      <div className="range">
        <label htmlFor="wordSpacing">
          Espacement des mots
        </label>

        <div className="range-valeur">
          <input
            type="range"
            id="wordSpacing"
            name="wordSpacing"
            min="0"
            max="20"
            step="1"
            value={preferences.wordSpacing}
            onChange={changerReglage}
          />

          <span>{preferences.wordSpacing}px</span>
        </div>
      </div>

    </div>
  );
}