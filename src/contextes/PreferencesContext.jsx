import { createContext, useContext, useEffect, useState } from "react";

export const PreferencesContext = createContext();

const preferencesParDefaut = {
  theme: "light",
  accentColor: "violet",
  language: "fr",

  fontFamily: "serif",
  fontSize: 18,
  lineHeight: 1.5,
  letterSpacing: 0,
  wordSpacing: 0,

  contentWidth: "normal",
};

export default function PreferencesProvider({ children }) {

  // Charger les préférences depuis localStorage
  const [preferences, setPreferences] = useState(() => {
    const preferencesSauvegardees =
      localStorage.getItem("lektio-preferences");

    if (preferencesSauvegardees) {
      return {
        ...preferencesParDefaut,
        ...JSON.parse(preferencesSauvegardees),
      };
    }

    return preferencesParDefaut;
  });


  // Modifier une préférence
  function modifierPreference(nom, valeur) {
    setPreferences((preferencesActuelles) => ({
      ...preferencesActuelles,
      [nom]: valeur,
    }));
  }


  // Réinitialiser toutes les préférences
  function reinitialiserPreferences() {
    setPreferences(preferencesParDefaut);
  }


  // Sauvegarder automatiquement dans localStorage
  useEffect(() => {
    localStorage.setItem(
      "lektio-preferences",
      JSON.stringify(preferences)
    );
  }, [preferences]);


  // Appliquer le thème
  useEffect(() => {
    document.body.className = preferences.theme;
  }, [preferences.theme]);


  // Appliquer la couleur d'accentuation
  useEffect(() => {

    const couleurs = {
      violet: "#7c3aed",
      bleu: "#2563eb",
      "bleu-vert": "#0f766e",
      vert: "#16a34a",
      orange: "#ea580c",
      rouge: "#dc2626",
    };

    document.documentElement.style.setProperty(
      "--accent-color",
      couleurs[preferences.accentColor]
    );

  }, [preferences.accentColor]);


  return (
    <PreferencesContext.Provider
      value={{
        preferences,
        modifierPreference,
        reinitialiserPreferences,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}


export function usePreferences() {
  return useContext(PreferencesContext);
}