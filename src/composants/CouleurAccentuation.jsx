import { usePreferences } from "../contextes/PreferencesContext";
import { useLangues } from "../contextes/LanguesContext";

// Composant permettant de choisir la couleur d'accentuation utilisée dans l'interface de l'application.
export default function CouleurAccentuation() {
  // Récupère les préférences actuelles et la fonction permettant de modifier une préférence.
  const { preferences, modifierPreference } = usePreferences();
  // Récupère la fonction de traduction.
  const { t } = useLangues();

  // Fonction appelée lorsqu'une couleur est sélectionnée.
  function changerCouleur(event) {
    // event.target.value correspond à la valeur du bouton radio sélectionné
    modifierPreference("accentColor", event.target.value);
  }

  return (
    <div className="couleur-accentuation">
      {/* Libellé du réglage. */}
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
            // Le bouton est sélectionné si la couleur actuelle enregistrée dans les préférences est "violet".
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