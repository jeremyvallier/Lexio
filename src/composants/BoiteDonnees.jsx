import Reinitialisation from "./Reinitialisation";

import { useLangues } from "../contextes/LanguesContext";
import { FiDatabase } from "react-icons/fi";
export default function BoiteDonnees() {
  const { t } = useLangues();

  return (
    <section className="boite-donnees">
      <div className="titredonnees">
        <FiDatabase />

        <h3>
          {t("settings.data.label")}
        </h3>
      </div>

      <Reinitialisation />
    </section>
  );
}