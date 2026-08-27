import { createContext, useContext, useState } from "react";

export const UIContext = createContext();

export default function UIProvider({ children }) {

  // Page actuellement affichée
  const [pageActive, setPageActive] = useState("bibliotheque");

  // État du volet des paramètres de lecture
  const [voletParametresOuvert, setVoletParametresOuvert] =
    useState(false);


  // Changer de page
  function changerPage(nouvellePage) {
    setPageActive(nouvellePage);
  }


  // Ouvrir le volet des paramètres
  function ouvrirVoletParametres() {
    setVoletParametresOuvert(true);
  }


  // Fermer le volet des paramètres
  function fermerVoletParametres() {
    setVoletParametresOuvert(false);
  }


  // Inverser l'état du volet
  function basculerVoletParametres() {
    setVoletParametresOuvert((etatActuel) => !etatActuel);
  }


  return (
    <UIContext.Provider
      value={{
        pageActive,
        voletParametresOuvert,

        changerPage,
        ouvrirVoletParametres,
        fermerVoletParametres,
        basculerVoletParametres,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}


export function useUI() {
  return useContext(UIContext);
}