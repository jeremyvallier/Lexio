import CouleurAccentuation from "./CouleurAccentuation";
import LangueInterface from "./LangueInterface";
import Theme from "./Theme";

import { useLangues } from "../contextes/LanguesContext";
import { MdOutlinePalette } from "react-icons/md";
// Regroupe tous les paramètres liés à l'apparence de l'application.
export default function BoiteApparence() {
  // Récupère la fonction de traduction depuis le contexte des langues.
  const { t } = useLangues();

  return (
    <section className="boite-apparence">

      <div className="titreappar">
        <MdOutlinePalette />

        <h3>
          {t("settings.appearance.label")}
        </h3>
      </div>
      {/* Permet de choisir le thème de l'application. */}
      <Theme />
      {/* Permet de choisir la couleur d'accentuation. */}
      <CouleurAccentuation />
      {/* Permet de choisir la langue de l'interface. */}
      <LangueInterface />

    </section>
  );
}