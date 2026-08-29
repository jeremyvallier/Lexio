import { usePreferences } from "../contextes/PreferencesContext";
import { useLangues } from "../contextes/LanguesContext";

// Composant qui regroupe les réglages numériques liés à l'affichage du texte.
export default function ReglageRange() {
  // Récupère les préférences actuelles ainsi que la fonction permettant de les modifier.
  const { preferences, modifierPreference } = usePreferences();
  // Récupère la fonction de traduction.
  const { t } = useLangues();

  // Fonction commune utilisée par tous les curseurs.
  function changerReglage(event) {
    // "name" identifie le réglage à modifier et "value" contient la nouvelle valeur du curseur.
    const { name, value } = event.target;

    // Les valeurs récupérées depuis un input sont des chaînes de caractères.
    // Number() permet de convertir la valeur en nombre avant de l'enregistrer.
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
          {/* Affiche la valeur actuelle à droite du curseur. */}
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
          {t("settings.typography.wordSpacing")}
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