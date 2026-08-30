import { useLangues } from "../contextes/LanguesContext";

// Composant permettant à l'utilisateur de choisir la langue de l'application.
export default function ChoixLangue() {
  // Récupère les données et fonctions nécessaires depuis le LanguesContext.
  // langue   : langue actuellement sélectionnée
  // changerLangue : fonction permettant de modifier la langue
  // locales  : liste des langues disponibles
  const {
    langue,
    changerLangue,
    locales,
  } = useLangues();

  return (
    <select
      name="choixLangue"
      id="choix"
      className="choixLangue"
      // La valeur affichée dans le select correspond toujours à la langue actuellement enregistrée dans le contexte (PreferenceContext).
      value={langue}
      // Lorsque l'utilisateur sélectionne une autre langue, on transmet sa valeur au contexte.
      onChange={(event) =>
        changerLangue(event.target.value)
      }
    >
      {/* Création automatique des options à partir
        de la liste des langues disponibles.
        Le composant n'a donc pas besoin d'écrire
        manuellement une option pour chaque langue.
        locales = sous-tableau contenant les langues utilisé*/}
      {locales.map((locale) => (
        <option
          key={locale}
          value={locale}
        >
          {/*toUpperCase() renvoie une chaîne de caractère en majuscules sans modifier la chaîne d'origine*/}
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  );
}