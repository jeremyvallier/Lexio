import { usePreferences } from "../contextes/PreferencesContext";
import { useLangues } from "../contextes/LanguesContext";

export default function Reinitialisation() {
  const { reinitialiserPreferences } = usePreferences();
  const { t } = useLangues();

  function reset() {
    reinitialiserPreferences();
  }

  return (
    <div className="boitereset">
      <button
        type="button"
        className="btnreset"
        onClick={reset}
      >
        {t("settings.data.resetPreferences")}
      </button>
    </div>
  );
}