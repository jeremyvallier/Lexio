import Reinitialisation from "./Reinitialisation";

import { useLangues } from "../contextes/LanguesContext";

export default function BoiteDonnees() {
  const { t } = useLangues();

  return (
    <section className="boite-donnees">
      <div className="titredonnees">
        <p aria-hidden="true">◷</p>

        <h3>
          {t("settings.data.label")}
        </h3>
      </div>

      <Reinitialisation />
    </section>
  );
}