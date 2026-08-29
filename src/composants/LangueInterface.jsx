import { useLangues } from "../contextes/LanguesContext";

// Composant permettant de choisir la langue de l'interface.
export default function LangueInterface() {

  // Récupère la langue actuellement sélectionnée, la fonction permettant de la modifier et la fonction de traduction.
  const { langue, changerLangue, t } = useLangues();

  // Fonction appelée lorsqu'une nouvelle langue est sélectionnée.
  function handleChangerLangue(event) {
    // event.target.value contient la valeur du bouton radio sélectionné (par exemple "fr", "en" ou "es").
    changerLangue(event.target.value);
  }

  return (
    <div className="langue-interface">
      {/* Libellé du réglage, traduit selon la langue actuelle. */}
      <p>
        {t("settings.appearance.language")}
      </p>

      <div className="btnlangue">

        <div className="radios">
          <input
            type="radio"
            id="fr"
            name="language"
            value="fr"
            // Le bouton est sélectionné si la langue actuelle est "fr"
            checked={langue === "fr"}
            onChange={handleChangerLangue}
          />

          <label htmlFor="fr">FR</label>
        </div>


        <div className="radios">
          <input
            type="radio"
            id="en"
            name="language"
            value="en"
            checked={langue === "en"}
            onChange={handleChangerLangue}
          />

          <label htmlFor="en">EN</label>
        </div>


        <div className="radios">
          <input
            type="radio"
            id="es"
            name="language"
            value="es"
            checked={langue === "es"}
            onChange={handleChangerLangue}
          />

          <label htmlFor="es">ES</label>
        </div>

      </div>

    </div>
  );
}