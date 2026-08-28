import { createContext, useContext, useState } from "react";

// Création du contexte dédié à l'état de l'interface utilisateur.
// Ce contexte permet de partager certains états liés à l'affichage entre plusieurs composants.
export const UIContext = createContext();

export default function UIProvider({ children }) {

  // Indique si le volet des paramètres de lecture (VoletParametres.jsx) est actuellement ouvert ou fermé.
  // true  : le volet est ouvert
  // false : le volet est fermé
  const [voletParametresOuvert, setVoletParametresOuvert] =
    useState(false);

  // Ouvre le volet des paramètres de lecture.
  function ouvrirVoletParametres() {
    setVoletParametresOuvert(true);
  }

  // Ferme le volet des paramètres de lecture.
  function fermerVoletParametres() {
    setVoletParametresOuvert(false);
  }

 // Le Provider rend les états et les fonctions disponibles à tous les composants enfants qui utilisent le UIContext.
  return (
    <UIContext.Provider
      // États de l'interface.
      // Fonctions permettant de modifier ces états.
      value={{ pageActive, voletParametresOuvert, changerPage, ouvrirVoletParametres, fermerVoletParametres, basculerVoletParametres, }}>
      {children}
    </UIContext.Provider>
  );
}


export function useUI() {
  return useContext(UIContext);
}