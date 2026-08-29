import { createContext, useContext, useState } from "react";
//importe les données depuis books.json
import booksData from "../data/books.json";
// Création du contexte qui permettra de partager
// les données liées aux livres dans l'application.
export const LivresContext = createContext();

export default function LivresProvider({ children }) {
  // Liste des livres.
  // Les données initiales proviennent du fichier books.json.
  const [livres] = useState(booksData.library);

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

  return (
    <LivresContext.Provider
    // Données accessibles aux composants enfants
    // Fonctions permettant de modifier ces données
     value={{ livres, livresFiltres, recherche, livreSelectionne, ouvrirLivre, fermerLivre, modifierRecherche }}>
      {children}
    </LivresContext.Provider>
  );
}


export function useLivres() {
  return useContext(LivresContext);
}