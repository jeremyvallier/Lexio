import { usePreferences } from "../contextes/PreferencesContext";
import { useLangues } from "../contextes/LanguesContext";

// Composant qui affiche le bouton permettant de réinitialiser toutes les préférences de l'utilisateur.
export default function Reinitialisation() {
  // Récupère depuis le PreferencesContext la fonction qui remet toutes les préférences à leurs valeurs par défaut.
  const { reinitialiserPreferences } = usePreferences();
  // Récupère la fonction de traduction.
  const { t } = useLangues();

  // Fonction appelée lorsque l'utilisateur clique sur le bouton.
  function reset() {
    // Demande au PreferencesContext de réinitialiser toutes les préférences.
    reinitialiserPreferences();
  }

  return (
    <div className="boitereset">
      <button
        type="button"
        className="btnreset"
        // Lorsque le bouton est cliqué, la fonction reset est exécutée.
        onClick={reset}
      >
        {t("settings.data.resetPreferences")}
      </button>
    </div>
  );
}