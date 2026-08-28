import { useLangues } from "../contextes/LanguesContext";

// Ce composant est une liste déroulante permettant
// de choisir la langue de l'application.

export default function ChoixLangue() {
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
      value={langue}
      onChange={(event) =>
        changerLangue(event.target.value)
      }
    >
      {locales.map((locale) => (
        <option
          key={locale}
          value={locale}
        >
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  );
}