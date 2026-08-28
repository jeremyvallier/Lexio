// StrictMode permet d'activer des vérifications supplémentaires
// pendant le développement afin d'aider à détecter certains problèmes.
import { StrictMode } from "react";
// createRoot permet de créer le point d'entrée de l'application React.
import { createRoot } from "react-dom/client";
// Composant principal contenant notamment les routes de l'application.
import App from "./App.jsx";
// Import des différents Context Providers.
// Ils permettent de partager certaines données entre plusieurs composants.
import PreferencesProvider from "./contextes/PreferencesContext";
import LanguesProvider from "./contextes/LanguesContext";
import LivresProvider from "./contextes/LivresContext";
import UIProvider from "./contextes/UIContext";

 /* createRoot récupère l'élément HTML ayant l'id "root"
  présent dans index.html. (page de base)
  React utilise cet élément comme point de départ
  pour afficher toute l'application.*/
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PreferencesProvider>
      <LanguesProvider>
        <LivresProvider>
          <UIProvider>
            <App />
          </UIProvider>
        </LivresProvider>
      </LanguesProvider>
    </PreferencesProvider>
  </StrictMode>
);
/*
      PreferencesProvider rend les préférences utilisateur
      accessibles aux composants enfants.

      Exemples :
      - thème
      - couleur d'accentuation
      - police
      - taille du texte
      - largeur du contenu
    */
/*
    LanguesProvider gère la langue de l'interface
    ainsi que les fonctions de traduction.
  */
/*
    LivresProvider centralise les données liées aux livres.

    Il permet notamment de gérer :
    - la liste des livres
    - la recherche
    - les livres filtrés
    - le livre actuellement sélectionné
    - la progression de lecture
*/
/*
    UIProvider centralise certains états liés à l'interface.

    Par exemple :
    - l'ouverture ou la fermeture du volet des paramètres
  */
/*
    App est le composant principal de l'application.
    Il contient notamment le système de navigation
    entre les différentes pages.
  */