import { createContext, useContext, useState } from "react";

import booksData from "../data/books.json";

export const LivresContext = createContext();

export default function LivresProvider({ children }) {
  // Liste des livres provenant de books.json
  const [livres, setLivres] = useState(booksData.library);

  // Livre actuellement ouvert
  const [livreSelectionne, setLivreSelectionne] = useState(null);

  // Texte de la recherche
  const [recherche, setRecherche] = useState("");


  // Ouvrir un livre
  function ouvrirLivre(livre) {
    setLivreSelectionne(livre);
  }


  // Fermer le livre actuellement ouvert
  function fermerLivre() {
    setLivreSelectionne(null);
  }


  // Modifier la recherche
  function modifierRecherche(valeur) {
    setRecherche(valeur);
  }


  // Filtrer les livres par titre ou auteur
  const livresFiltres = livres.filter((livre) => {
    const rechercheMinuscule = recherche
      .trim()
      .toLowerCase();

    return (
      livre.title.toLowerCase().includes(rechercheMinuscule) ||
      livre.author.toLowerCase().includes(rechercheMinuscule)
    );
  });


  // Modifier la progression d'un livre
  function modifierProgression(id, nouvelleProgression) {
    setLivres((livresActuels) =>
      livresActuels.map((livre) =>
        livre.id === id
          ? {
              ...livre,
              readingProgress: nouvelleProgression,
              lastOpenedAt: new Date().toISOString(),
            }
          : livre
      )
    );

    // Met également à jour le livre ouvert
    if (livreSelectionne?.id === id) {
      setLivreSelectionne((livreActuel) => ({
        ...livreActuel,
        readingProgress: nouvelleProgression,
        lastOpenedAt: new Date().toISOString(),
      }));
    }
  }


  return (
    <LivresContext.Provider
      value={{
        livres,
        livresFiltres,
        recherche,
        livreSelectionne,

        ouvrirLivre,
        fermerLivre,
        modifierRecherche,
        modifierProgression,
      }}
    >
      {children}
    </LivresContext.Provider>
  );
}


export function useLivres() {
  return useContext(LivresContext);
}