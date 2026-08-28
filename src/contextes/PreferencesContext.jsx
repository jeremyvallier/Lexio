import { createContext, useContext, useEffect, useState } from "react";
/*
  Ce createContext permet de partager les préférences de l'utilisateur
  avec l'ensemble de l'application sans devoir transmettre les données
  manuellement de composant en composant avec des props.
*/
export const PreferencesContext = createContext();
/*Objet contenant les valeurs par défaut de toutes les préférences. 
  - lors de la première utilisation de l'application ;
  - comme base si certaines préférences sont absentes du localStorage ;
  - lors de la réinitialisation des préférences.
*/
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
/* Le Provider englobe l'application dans main.jsx et rend les préférences
  accessibles à tous les composants enfants grâce au PreferencesContext.*/
export default function PreferencesProvider({ children }) {
/*
    État contenant toutes les préférences de l'utilisateur.
    La fonction passée à useState est exécutée uniquement lors de
    l'initialisation du composant.
    Elle permet de récupérer les préférences précédemment sauvegardées
    dans le localStorage.
  */
  // Charger les préférences depuis localStorage
  const [preferences, setPreferences] = useState(() => {
    const preferencesSauvegardees =
      localStorage.getItem("lektio-preferences");

    
      /*Si des préférences existent déjà dans le localStorage,
      elles sont fusionnées avec les préférences par défaut.
      Cela permet de conserver une valeur par défaut si une nouvelle
      préférence est ajoutée plus tard dans l'application.*/
    if (preferencesSauvegardees) {
      return {
        ...preferencesParDefaut,
        ...JSON.parse(preferencesSauvegardees),
      };
    }
    // Lors de la première utilisation, les valeurs par défaut sont utilisées.
    return preferencesParDefaut;
  });

   /* Fonction générique permettant de modifier une seule préférence.
    La syntaxe [nom] permet de modifier dynamiquement la propriété
    correspondant au nom reçu en paramètre.*/
  function modifierPreference(nom, valeur) {
    setPreferences((preferencesActuelles) => ({
      //Les préférences existantes sont conservées afin de ne modifier qu'une seule valeur à la fois.
      ...preferencesActuelles,
      // Mise à jour de la préférence demandée.
      [nom]: valeur,
    }));
  }


  // Réinitialise l'ensemble des préférences avec les valeurs définies dans preferencesParDefaut.
  function reinitialiserPreferences() {
    setPreferences(preferencesParDefaut);
  }

  
  /*Sauvegarde automatique des préférences.
  Ce useEffect est exécuté chaque fois que l'objet preferences change.
  Les préférences sont converties en texte avec JSON.stringify avant
  d'être enregistrées dans le localStorage.
  Cela permet de retrouver les réglages de l'utilisateur après
  un rechargement de la page.*/
  useEffect(() => {
    localStorage.setItem(
      "lektio-preferences",
      JSON.stringify(preferences)
    );
  }, [preferences]);


  
   /*Application du thème.
    La classe correspondant au thème choisi est ajoutée directement
    à l'élément <body>.
    Les variables CSS définies peuvent alors être
    utilisées dans toute l'application.*/
  useEffect(() => {
    document.body.className = preferences.theme;
  }, [preferences.theme]);


  
   /* Application de la couleur d'accentuation.
    Les valeurs stockées dans les préférences sont des noms simples.(ex: bleu)
    Cet objet permet de faire correspondre chaque nom à une valeur CSS.*/
  useEffect(() => {

    const couleurs = {
      violet: "#7c3aed",
      bleu: "#2563eb",
      "bleu-vert": "#0f766e",
      vert: "#16a34a",
      orange: "#ea580c",
      rouge: "#dc2626",
    };
    
     /* La couleur sélectionnée est enregistrée dans une variable CSS globale.
      Les composants utilisant :
      var(--accent-color)
      sont automatiquement mis à jour lorsque la préférence change.*/
    document.documentElement.style.setProperty(
      "--accent-color",
      couleurs[preferences.accentColor]
    );

  }, [preferences.accentColor]);

    
  /*Application de la police utilisée pour la lecture.
  Comme pour les couleurs, les valeurs stockées dans les préférences
  sont associées à une valeur CSS complète.*/
  useEffect(() => {
    const polices = {
      serif: "Georgia, 'Times New Roman', serif",
      sansSerif: "Arial, Helvetica, sans-serif",
      openDys: "OpenDyslexic, Arial, sans-serif",
    };
    
    /*La police sélectionnée est stockée dans la variable CSS globale
    --police-lecture.
    Le composant Texte peut ensuite utiliser :
    font-family: var(--police-lecture);*/
    document.documentElement.style.setProperty(
      "--police-lecture",
      polices[preferences.fontFamily]
    );
  }, [preferences.fontFamily]);

  
  /* Application de la largeur du contenu de lecture.
  La préférence contient une valeur simple :
  "narrow", "normal" ou "wide".
  Cette valeur est convertie en largeur CSS avant d'être enregistrée
  dans la variable --largeur-contenu.*/
  useEffect(() => {
    const largeurs = {
      narrow: "600px",
      normal: "800px",
      wide: "1100px",
    };
    
    /*Les composants utilisant :
    max-width: var(--largeur-contenu);
    seront automatiquement mis à jour lorsque l'utilisateur
    choisit une nouvelle largeur.*/
    document.documentElement.style.setProperty(
      "--largeur-contenu",
      largeurs[preferences.contentWidth]
    );
  }, [preferences.contentWidth]);
  
    /*Le Provider rend disponibles :
    - preferences :
      l'ensemble des préférences actuelles ;
    - modifierPreference :
      fonction générique permettant de modifier une préférence ;
    - reinitialiserPreferences :
      fonction permettant de revenir aux valeurs par défaut.*/
  return (
    <PreferencesContext.Provider
      value={{ preferences, modifierPreference, reinitialiserPreferences,}}>
      {children}
    </PreferencesContext.Provider>
  );
  
}


/*Hook personnalisé permettant d'utiliser facilement le Context.
Au lieu d'écrire :
useContext(PreferencesContext)
dans chaque composant, on peut simplement écrire :
const { preferences } = usePreferences();*/
export function usePreferences() {
  return useContext(PreferencesContext);
}