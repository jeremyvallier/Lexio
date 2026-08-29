import Reinitialisation from "./Reinitialisation";

import { useLangues } from "../contextes/LanguesContext";
import { FiDatabase } from "react-icons/fi";
// Regroupe les paramètres liés aux données de l'application.
export default function BoiteDonnees() {
   // Récupère la fonction de traduction pour afficher les textes dans la langue sélectionnée.
  const { t } = useLangues();

  return (
    <section className="boite-donnees">
      <div className="titredonnees">
        <FiDatabase />

        <h3>
          {t("settings.data.label")}
        </h3>
      </div>
      {/* Affiche le bouton permettant de réinitialiser les préférences. */}
      <Reinitialisation />
    </section>
  );
}