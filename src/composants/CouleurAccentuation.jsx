import { usePreferences } from "../contextes/PreferencesContext";
import { useLangues } from "../contextes/LanguesContext";

export default function CouleurAccentuation() {
  const { preferences, modifierPreference } = usePreferences();
  const { t } = useLangues();

  function changerCouleur(event) {
    modifierPreference("accentColor", event.target.value);
  }

  return (
    <div className="couleur-accentuation">

      <p>
        {t("settings.appearance.accentColor")}
      </p>

      <div className="btncouleur">

        <div className="radioscouleur">
          <input
            type="radio"
            id="violet"
            name="accentColor"
            value="violet"
            checked={preferences.accentColor === "violet"}
            onChange={changerCouleur}
            aria-label="Violet"
          />

          <label htmlFor="violet">
            <span className="swatch violet"></span>
          </label>
        </div>


        <div className="radioscouleur">
          <input
            type="radio"
            id="bleu"
            name="accentColor"
            value="bleu"
            checked={preferences.accentColor === "bleu"}
            onChange={changerCouleur}
            aria-label="Bleu"
          />

          <label htmlFor="bleu">
            <span className="swatch bleu"></span>
          </label>
        </div>


        <div className="radioscouleur">
          <input
            type="radio"
            id="bleu-vert"
            name="accentColor"
            value="bleu-vert"
            checked={preferences.accentColor === "bleu-vert"}
            onChange={changerCouleur}
            aria-label="Bleu vert"
          />

          <label htmlFor="bleu-vert">
            <span className="swatch bleu-vert"></span>
          </label>
        </div>


        <div className="radioscouleur">
          <input
            type="radio"
            id="vert"
            name="accentColor"
            value="vert"
            checked={preferences.accentColor === "vert"}
            onChange={changerCouleur}
            aria-label="Vert"
          />

          <label htmlFor="vert">
            <span className="swatch vert"></span>
          </label>
        </div>


        <div className="radioscouleur">
          <input
            type="radio"
            id="orange"
            name="accentColor"
            value="orange"
            checked={preferences.accentColor === "orange"}
            onChange={changerCouleur}
            aria-label="Orange"
          />

          <label htmlFor="orange">
            <span className="swatch orange"></span>
          </label>
        </div>


        <div className="radioscouleur">
          <input
            type="radio"
            id="rouge"
            name="accentColor"
            value="rouge"
            checked={preferences.accentColor === "rouge"}
            onChange={changerCouleur}
            aria-label="Rouge"
          />

          <label htmlFor="rouge">
            <span className="swatch rouge"></span>
          </label>
        </div>

      </div>
    </div>
  );
}