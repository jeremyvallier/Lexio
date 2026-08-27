import BoiteApparence from "../composants/BoiteApparence";
import BoiteTypeText from "../composants/BoiteTypeText";
import BoiteDonnees from "../composants/BoiteDonnees";

import Header from "../composants/Header";
import Navigation from "../composants/Navigation";

import { useLangues } from "../contextes/LanguesContext";

export default function Preferences() {
  const { t } = useLangues();

  return (
    <div className="page-preferences">
      <Header />

      <main>
        <h2>{t("nav.settings")}</h2>

        <BoiteApparence />

        <BoiteTypeText />

        <BoiteDonnees />
      </main>

      <Navigation />
    </div>
  );
}