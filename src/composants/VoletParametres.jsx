import BoiteTypeText from "./BoiteTypeText";

import { useUI } from "../contextes/UIContext";

export default function VoletParametres() {
  const {
    voletParametresOuvert,
    ouvrirVoletParametres,
    fermerVoletParametres,
  } = useUI();

  // Si le volet est fermé :
  // on affiche uniquement sa partie supérieure.
  if (!voletParametresOuvert) {
    return (
      <div
        className="volet-ferme"
        onClick={ouvrirVoletParametres}
      >
        <div className="poignee-volet"></div>

        <p>Paramètres de lecture</p>
      </div>
    );
  }

  // Si le volet est ouvert :
  // l'overlay apparaît derrière.
  return (
    <div
      className="volet-overlay"
      onClick={fermerVoletParametres}
    >
      <div className="overlay-fond"></div>

      <aside
        className="voletparametres"
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="poignee-volet"
          onClick={fermerVoletParametres}
        ></div>

        <h2>Paramètres de lecture</h2>

        <BoiteTypeText />
      </aside>
    </div>
  );
}