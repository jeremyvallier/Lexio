import { createContext, useContext } from "react";
//importe les données de traduction depuis translations.json
import translationsData from "../data/translations.json";

import { usePreferences } from "./PreferencesContext";
// Création du contexte dédié à la gestion des langues.
// Il permettra aux composants enfants d'accéder à la langue actuelle
// et à la fonction de traduction sans devoir transmettre ces données
// manuellement par les props.
export const LanguesContext = createContext();

export default function LanguesProvider({ children }) {
  // Le contexte des langues utilise le PreferencesContext.
  // La langue choisie par l'utilisateur est enregistrée
  // dans les préférences de l'application.
  const { preferences, modifierPreference } = usePreferences();

  // La langue actuelle vient directement des préférences de l'utilisateur
  const langue = preferences.language;


  // Fonction permettant de modifier la langue.
  // La nouvelle valeur est enregistrée dans les préférences,
  // ce qui met automatiquement à jour tous les composants
  // utilisant le contexte des langues.
  function changerLangue(nouvelleLangue) {
    modifierPreference("language", nouvelleLangue);
  }


  // Fonction de traduction.
  // Elle reçoit un chemin sous forme de chaîne de caractères.
  // Ce chemin permet de retrouver la bonne traduction
  // dans le fichier translations.json.
  function t(chemin) {
    // Transformation du chemin en tableau.
    // Exemple :
    // "settings.appearance.label"
    // devient :
    // ["settings", "appearance", "label"]
    const cles = chemin.split(".");
    // Point de départ de la recherche dans les données de traduction.
    let traduction = translationsData.translations;
    // Parcours des différentes clés du chemin.
    // À chaque étape, on descend d'un niveau dans l'objet translations.json.
    cles.forEach((cle) => {
      // L'opérateur ?. permet d'éviter une erreur si une clé n'existe pas dans l'objet.
      traduction = traduction?.[cle];
    });

    // Une fois le texte trouvé, on récupère la traduction correspondant à la langue actuellement sélectionnée.
    // Si aucune traduction n'est trouvée, une chaîne vide est retournée.
    return traduction?.[langue] || "";
  }

  // Le Provider rend disponibles les données et fonctions liées à la gestion des langues à tous ses composants enfants.
  return (
    <LanguesContext.Provider
    // Langue actuellement sélectionnée.
    // Fonction permettant de changer la langue.
    // Liste des langues disponibles dans l'application.
    // Fonction utilisée par les composants pour récupérer une traduction.
      value={{ langue, changerLangue, locales: translationsData.locales, t }} >
      {children}
    </LanguesContext.Provider>
  );
}


export function useLangues() {
  return useContext(LanguesContext);
}