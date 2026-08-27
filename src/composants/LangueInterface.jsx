import { useLangues } from "../contextes/LanguesContext";

export default function LangueInterface() {

  const { langue, changerLangue, t } = useLangues();

  function handleChangerLangue(event) {
    changerLangue(event.target.value);
  }

  return (
    <div className="langue-interface">

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