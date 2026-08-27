import { usePreferences } from "../contextes/PreferencesContext";
import { useLangues } from "../contextes/LanguesContext";

export default function Theme() {
  const { preferences, modifierPreference } = usePreferences();
  const { t } = useLangues();

  function changerTheme(event) {
    modifierPreference("theme", event.target.value);
  }

  return (
    <div className="theme">
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
            checked={preferences.theme === "light"}
            onChange={changerTheme}
          />

          <label htmlFor="light">
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
            {t("settings.appearance.theme.dark")}
          </label>
        </div>


        <div className="radiostheme">
          <input
            type="radio"
            id="highContrast"
            name="theme"
            value="highContrast"
            checked={preferences.theme === "highContrast"}
            onChange={changerTheme}
          />

          <label htmlFor="highContrast">
            {t("settings.appearance.theme.highContrast")}
          </label>
        </div>

      </div>
    </div>
  );
}