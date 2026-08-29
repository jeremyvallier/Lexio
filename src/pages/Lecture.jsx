import BarreProgression from "../composants/BarreProgression";
import Nav from "../composants/Nav";
import Texte from "../composants/Texte";
import VoletParametres from "../composants/VoletParametres";

import { useLivres } from "../contextes/LivresContext";


export default function Lecture() {
  const { livreSelectionne } = useLivres();

  return (
    <div className="page-lecture">

      <Nav />

      {!livreSelectionne ? (
        <p>Aucun livre sélectionné</p>
      ) : (
          <>
            <BarreProgression
              progression={livreSelectionne.readingProgress}
            />
            <Texte
              livre={livreSelectionne}
            />
            {<VoletParametres />}
          </>
        )}
    </div>
  );
}