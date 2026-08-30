import { useLivres } from "../contextes/LivresContext";
import { usePreferences } from "../contextes/PreferencesContext";

// Composant chargé d'afficher le contenu du livre en appliquant les préférences de lecture de l'utilisateur.
export default function Texte({ livre }) {
  // Récupère le livre sélectionné depuis le contexte.
  const { livreSelectionne } = useLivres();
  // Récupère les préférences de lecture depuis le contexte.
  const { preferences } = usePreferences();
  // Associe chaque valeur enregistrée pour la police à la police CSS correspondante.
  const polices = {
    serif: "Georgia, serif",
    sansSerif: "Arial, sans-serif",
    openDys: "OpenDyslexic, sans-serif",
  };

  // Utilise le livre reçu en props,
  // sinon récupère le livre sélectionné dans le Context.
  const livreActuel = livre || livreSelectionne;

  
    /*Le composant peut recevoir un livre avec une prop "livre".
    Si aucune prop n'est fournie, on utilise le livre
    actuellement sélectionné dans le LivresContext.*/
  if (!livreActuel) {
    return null;
  }

  // Texte temporaire en attendant les données
  // des chapitres et du contenu des livres.
  const chapitre = "Chapitre 1";

  
    /*Contenu temporaire utilisé pendant le développement.
    Il sera remplacé lorsque les chapitres et le contenu
    réel des livres seront disponibles.*/
  const contenu = `
    Le contenu du livre sera affiché ici.
    Cette zone sera ensuite adaptée selon les préférences
    de lecture choisies par l'utilisateur.
  `;

  return (
    <div
      
         /* La classe "textelivre" contient les styles communs
          au texte de lecture.
          Une deuxième classe est ajoutée dynamiquement
          selon la largeur choisie dans les préférences :
          largeur-narrow, largeur-normal ou largeur-wide.*/
      className={`textelivre largeur-${preferences.contentWidth}`}
      
        /*Les préférences de lecture sont appliquées directement
        au texte grâce aux styles CSS calculés à partir
        des valeurs enregistrées dans PreferencesContext.*/
      style={{
        fontFamily: polices[preferences.fontFamily],
        fontSize: `${preferences.fontSize}px`,
        lineHeight: preferences.lineHeight,
        letterSpacing: `${preferences.letterSpacing}px`,
        wordSpacing: `${preferences.wordSpacing}px`,
      }}
    >
      <h2>{chapitre}</h2>

      <p>{contenu}</p>
    </div>
  );
}