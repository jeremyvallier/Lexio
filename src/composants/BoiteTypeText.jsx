import LargeurContenu from "./LargeurContenu";
import Police from "./Police";
import ReglageRange from "./ReglageRange";

import { useLangues } from "../contextes/LanguesContext";
import { RxLetterCaseCapitalize } from "react-icons/rx";

// Composant qui regroupe les différents réglages liés à la typographie et à la mise en forme du texte.
export default function BoiteTypeText() {
  // Récupère la fonction de traduction pour afficher les textes dans la langue sélectionnée.
  const { t } = useLangues();

  return (
    <section className="boite-type-text">
      {/* Titre de la section avec son icône. */}
      <div className="titretypo">
        <RxLetterCaseCapitalize />

        <h3>
          {t("settings.typography.label")}
        </h3>
      </div>
      {/* Permet de choisir la police de lecture. */}
      <Police />
      {/* Regroupe les réglages de taille et d'espacement du texte. */}
      <ReglageRange />
      {/* Permet de choisir la largeur du texte. */}
      <LargeurContenu />
    </section>
  );
}