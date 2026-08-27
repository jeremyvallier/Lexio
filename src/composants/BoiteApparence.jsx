import CouleurAccentuation from "./CouleurAccentuation";
import LangueInterface from "./LangueInterface";
import Theme from "./Theme";

import { useLangues } from "../contextes/LanguesContext";

// Regroupe tous les paramètres liés à l'apparence
export default function BoiteApparence() {
  const { t } = useLangues();

  return (
    <section className="boite-apparence">

      <div className="titreappar">
        <p aria-hidden="true">◐</p>

        <h3>
          {t("settings.appearance.label")}
        </h3>
      </div>

      <Theme />

      <CouleurAccentuation />

      <LangueInterface />

    </section>
  );
}