import BoiteTypeText from "./BoiteTypeText";
import { useUI } from "../contextes/UIContext";

export default function VoletParametres() {
  const {
    voletParametresOuvert,
    ouvrirVoletParametres,
    fermerVoletParametres,
  } = useUI();

  return (
    <>
      {/* Partie réduite toujours visible en bas */}

      <button
        type="button"
        className="volet-ferme"
        onClick={ouvrirVoletParametres}
      >
        <div className="poignee-volet"></div>

        <p>Paramètres de lecture</p>
      </button>

      {/* Overlay + volet complet */}

      {voletParametresOuvert && (
        <div className="volet-overlay">

          {/* Fond sombre cliquable */}

          <div
            className="overlay-fond"
            onClick={fermerVoletParametres}
          ></div>

          {/* Volet */}

          <aside className="voletparametres">

            <button
              type="button"
              className="fermer-volet"
              onClick={fermerVoletParametres}
              aria-label="Fermer les paramètres"
            >
              ×
            </button>

            <div className="poignee-volet"></div>

            <h2>Paramètres de lecture</h2>

            <BoiteTypeText />

          </aside>

        </div>
      )}
    </>
  );
}