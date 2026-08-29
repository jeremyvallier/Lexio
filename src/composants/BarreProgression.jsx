export default function BarreProgression({
  // Valeur de progression reçue par le composant.
  // Si aucune valeur n'est fournie, la progression commence à 0 %.
  progression = 0,
  // Permet d'ajouter une classe CSS supplémentaire au composant.
  // Cela permet notamment d'avoir un style différent selon l'utilisation
  // de la barre (par exemple dans card).
  className = "",
}) {

  // On s'assure que la progression reste toujours comprise entre 0 et 100.
  // Math.max(0, progression) empêche une valeur négative.
  // Math.min(100, ...) empêche une valeur supérieure à 100.
  const progressionValide = Math.min(
    100,
    Math.max(0, progression)
  );

  return (
    // La classe "barre" est toujours présente.
    // La classe reçue dans "className" est ajoutée après.
    // Exemple : className="barrecard" donnera :
    // "barre barrecard"
    <div className={`barre ${className}`}>

      {/* Affiche la valeur numérique de la progression. */}
      <p>{progressionValide}%</p>

      {/* Conteneur visuel de la barre de progression. */}
      <div
        className="barreprogression"
        // Indique au navigateur que cet élément représente une barre de progression.
        role="progressbar"
        // Valeur actuelle de la progression.
        aria-valuenow={progressionValide}
        // Valeur minimale possible.
        aria-valuemin="0"
        // Valeur maximale possible.
        aria-valuemax="100"
        // Texte permettant aux technologies d'assistance (lecteur d'écran) de comprendre ce que représente la barre.
        aria-label="Progression de lecture"
      >
         
         {/* Cette div représente la partie remplie de la barre.
          Sa largeur est calculée en fonction du pourcentage.
          Exemple :
          25 % → width: "25%"
          75 % → width: "75%"
          100 % → width: "100%"*/}
        <div
          className="barreprogression-remplissage"
          style={{
            width: `${progressionValide}%`,
          }}
        />
      </div>

    </div>
  );
}