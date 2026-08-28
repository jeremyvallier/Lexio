import { createContext, useContext, useState } from "react";
//importe les données depuis books.json
import booksData from "../data/books.json";
// Création du contexte qui permettra de partager
// les données liées aux livres dans l'application.
export const LivresContext = createContext();

export default function LivresProvider({ children }) {
  // Liste des livres.
  // Les données initiales proviennent du fichier books.json.
  const [livres, setLivres] = useState(booksData.library);

  // Contient le livre actuellement sélectionné pour la lecture.
  // La valeur null signifie qu'aucun livre n'est ouvert.
  const [livreSelectionne, setLivreSelectionne] = useState(null);

  // Contient le texte saisi par l'utilisateur dans le champ de recherche.
  const [recherche, setRecherche] = useState("");

  // Sélectionne un livre afin de pouvoir l'afficher dans la page de lecture.
  function ouvrirLivre(livre) {
    setLivreSelectionne(livre);
  }

  // Réinitialise le livre sélectionné.
  // Aucun livre n'est alors considéré comme ouvert.
  function fermerLivre() {
    setLivreSelectionne(null);
  }


  // Met à jour le texte utilisé pour filtrer la bibliothèque.
  function modifierRecherche(valeur) {
    setRecherche(valeur);
  }


  // Création d'une liste dérivée contenant uniquement
  // les livres correspondant à la recherche.
  // La recherche est effectuée sur le titre et l'auteur.
  // trim() supprime les espaces inutiles et toLowerCase()
  // permet d'effectuer une recherche sans tenir compte
  // des majuscules et des minuscules.
  const livresFiltres = livres.filter((livre) => {
    const rechercheMinuscule = recherche
      .trim()
      .toLowerCase();

    return (
      //includes "qui contient la chaîne de caractères saisie" || = ET
      livre.title.toLowerCase().includes(rechercheMinuscule) ||
      livre.author.toLowerCase().includes(rechercheMinuscule)
    );
  });


  // Met à jour la progression de lecture d'un livre identifié grâce à son id.
  function modifierProgression(id, nouvelleProgression) {
    // Mise à jour de la liste complète des livres.
    // map() crée un nouveau tableau. Seul le livre ayant l'id correspondant est remplacé par une nouvelle
    // version contenant la progression mise à jour.
    setLivres((livresActuels) =>
      livresActuels.map((livre) =>
        livre.id === id
          ? {
              ...livre,
              readingProgress: nouvelleProgression,
              //sert à mémoriser la date et l'heure auxquelles le livre a été ouvert ou modifié pour la dernière fois.
              //toISOString transforme cette date dans un format texte standard appelé ISO 8601 utile pour modifierProgression()
              lastOpenedAt: new Date().toISOString(),
            }
          : livre
      )
    );

    // Si le livre dont la progression est modifiée est également celui actuellement ouvert,
    // on met aussi à jour livreSelectionne.
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
    // Données accessibles aux composants enfants
    // Fonctions permettant de modifier ces données
     value={{ livres, livresFiltres, recherche, livreSelectionne, ouvrirLivre, fermerLivre, modifierRecherche, modifierProgression, }}>
      {children}
    </LivresContext.Provider>
  );
}


export function useLivres() {
  return useContext(LivresContext);
}