import Card from "../composants/Card";
import Formulaire from "../composants/Formulaire";
import Header from "../composants/Header";
import Navigation from "../composants/Navigation";

import { useLivres } from "../contextes/LivresContext";
import { useLangues } from "../contextes/LanguesContext";

export default function Bibliotheque() {
  const { livresFiltres } = useLivres();
  const { t } = useLangues();

  return (
    <div>
      <Header />

      <h2>{t("nav.library")}</h2>

      <Formulaire />

      <div className="liste-livres">
        {livresFiltres.map((livre) => (
          <Card
            key={livre.id}
            livre={livre}
          />
        ))}
      </div>

      <Navigation />
    </div>
  );
}