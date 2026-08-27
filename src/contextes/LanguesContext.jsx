import { createContext, useContext } from "react";

import translationsData from "../data/translations.json";

import { usePreferences } from "./PreferencesContext";

export const LanguesContext = createContext();

export default function LanguesProvider({ children }) {

  const { preferences, modifierPreference } = usePreferences();

  // La langue actuelle vient directement des préférences
  const langue = preferences.language;


  // Changer la langue
  function changerLangue(nouvelleLangue) {
    modifierPreference("language", nouvelleLangue);
  }


  // Récupérer une traduction à partir d'un chemin
  function t(chemin) {

    const cles = chemin.split(".");

    let traduction = translationsData.translations;

    cles.forEach((cle) => {
      traduction = traduction?.[cle];
    });

    return traduction?.[langue] || "";
  }


  return (
    <LanguesContext.Provider
      value={{
        langue,
        changerLangue,
        locales: translationsData.locales,
        t,
      }}
    >
      {children}
    </LanguesContext.Provider>
  );
}


export function useLangues() {
  return useContext(LanguesContext);
}