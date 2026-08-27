import { useLivres } from "../contextes/LivresContext";
import { usePreferences } from "../contextes/PreferencesContext";

export default function Texte({ livre }) {
  const { livreSelectionne } = useLivres();
  const { preferences } = usePreferences();
  const polices = {
  serif: "Georgia, serif",
  sansSerif: "Arial, sans-serif",
  openDys: "OpenDyslexic, sans-serif",
};

  // Utilise le livre reçu en props,
  // sinon récupère le livre sélectionné dans le Context.
  const livreActuel = livre || livreSelectionne;

  if (!livreActuel) {
    return null;
  }

  // Texte temporaire en attendant les données
  // des chapitres et du contenu des livres.
  const chapitre = "Chapitre 1";

  const contenu = `
    Le contenu du livre sera affiché ici.
    Cette zone sera ensuite adaptée selon les préférences
    de lecture choisies par l'utilisateur.
  `;

  return (
    <div
      className={`textelivre largeur-${preferences.contentWidth}`}
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