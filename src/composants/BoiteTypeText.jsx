import LargeurContenu from "./LargeurContenu";
import Police from "./Police";
import ReglageRange from "./ReglageRange";

import { useLangues } from "../contextes/LanguesContext";

// Composant qui regroupe les réglages
// liés à la typographie et à la lecture.
export default function BoiteTypeText() {
  const { t } = useLangues();

  return (
    <section className="boite-type-text">
      <div className="titretypo">
        <p aria-hidden="true">Aa</p>

        <h3>
          {t("settings.typography.label")}
        </h3>
      </div>

      <Police />

      <ReglageRange />

      <LargeurContenu />
    </section>
  );
}