import BarreProgression from "../composants/BarreProgression";
import Nav from "../composants/Nav";
import Texte from "../composants/Texte";
import VoletParametres from "../composants/VoletParametres";

import { useLivres } from "../contextes/LivresContext";
import { useUI } from "../contextes/UIContext";

export default function Lecture() {
  const { livreSelectionne } = useLivres();

  const {
    voletParametresOuvert,
  } = useUI();

  // Sécurité : aucun livre sélectionné
  if (!livreSelectionne) {
    return <p>Aucun livre sélectionné.</p>;
  }

  return (
    <div className="page-lecture">

      <Nav />

      <BarreProgression
        progression={livreSelectionne.readingProgress}
      />

      <Texte
        livre={livreSelectionne}
      />

      {voletParametresOuvert && (
        <VoletParametres />
      )}

    </div>
  );
}