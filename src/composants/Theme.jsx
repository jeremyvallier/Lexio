import { usePreferences } from "../contextes/PreferencesContext";
import { useLangues } from "../contextes/LanguesContext";
import { PiLightbulbFill } from "react-icons/pi";
import { PiLightbulbLight } from "react-icons/pi";
// Composant permettant de choisir le thème de l'application.
export default function Theme() {
  // Récupère les préférences actuelles et la fonction permettant de les modifier depuis PreferencesContext
  const { preferences, modifierPreference } = usePreferences();
  // Récupère la fonction de traduction depuis LanguesContext.
  const { t } = useLangues();

  // Fonction appelée lorsqu'un utilisateur sélectionne un thème.
  function changerTheme(event) {
    // event.target.value contient la valeur du bouton radio sélectionné.
    // On met à jour la préférence "theme" dans PreferencesContext.
    modifierPreference("theme", event.target.value);
  }

  return (
    <div className="theme">
      {/* Libellé de la catégorie de réglage. */}
      <p>
        {t("settings.appearance.theme.label")}
      </p>

      <div className="btntheme">

        <div className="radiostheme">
          <input
            type="radio"
            id="light"
            name="theme"
            value="light"
            //Le bouton est sélectionné uniquement si le thème actuellement enregistré dans les préférences est "light".
            checked={preferences.theme === "light"}
            onChange={changerTheme}
          />

          <label htmlFor="light">
            <PiLightbulbFill />
            {t("settings.appearance.theme.light")}
          </label>
        </div>


        <div className="radiostheme">
          <input
            type="radio"
            id="sepia"
            name="theme"
            value="sepia"
            checked={preferences.theme === "sepia"}
            onChange={changerTheme}
          />

          <label htmlFor="sepia">
            <PiLightbulbFill />
            {t("settings.appearance.theme.sepia")}
          </label>
        </div>


        <div className="radiostheme">
          <input
            type="radio"
            id="dark"
            name="theme"
            value="dark"
            checked={preferences.theme === "dark"}
            onChange={changerTheme}
          />

          <label htmlFor="dark">
            <PiLightbulbLight />
            {t("settings.appearance.theme.dark")}
          </label>
        </div>

      </div>
    </div>
  );
}