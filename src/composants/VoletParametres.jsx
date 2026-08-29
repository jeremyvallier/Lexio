import BoiteTypeText from "./BoiteTypeText";
import { useUI } from "../contextes/UIContext";

// Composant qui affiche le volet des paramètres de lecture.
// Le volet peut être fermé ou ouvert selon son état dans UIContext.
export default function VoletParametres() {
  // Récupère dans UIContext l'état du volet ainsi que les fonctions permettant de l'ouvrir et de le fermer.
  const {
    voletParametresOuvert,
    ouvrirVoletParametres,
    fermerVoletParametres,
  } = useUI();

   /* Lorsque le volet est fermé, seule sa partie supérieure
    reste visible en bas de l'écran.
    Un clic sur cette partie permet d'ouvrir le volet.*/
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

  
   /* Lorsque le volet est ouvert, un overlay recouvre la page.
    L'overlay permet de fermer le volet lorsqu'on clique
    en dehors de celui-ci.*/
  return (
    <div
      className="volet-overlay"
      onClick={fermerVoletParametres}
    >
      <div className="overlay-fond"></div>

      <aside
        className="voletparametres"
         /* Empêche le clic effectué à l'intérieur du volet
          de remonter jusqu'à "volet-overlay".
          Sans stopPropagation(), un clic sur les boutons
          ou les réglages du volet fermerait également le volet.*/
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="poignee-volet"
          // La poignée permet également de fermer le volet.
          onClick={fermerVoletParametres}
        ></div>

        <h2>Paramètres de lecture</h2>
        {/* Contient les réglages typographiques du texte. */}
        <BoiteTypeText />
      </aside>
    </div>
  );
}