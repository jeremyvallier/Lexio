
Résumé et explication pour le code : 
librairie utilisées :
- phosphors icons pour les icônes
- react-router pour "la navigation entre les pages"

reflexion.webp : schéma basique de la maquette figma (ressources examen), vu d'ensemble du projet, les différents contextes et les différents composants et leur
imbrication.

Trois "pages" :
- Bibliotheque , sert de page d'accueil, affiche les livres et le formulaire de recherche , + header et barre de navigation
        pas de reponsive pour la grille qui positionne les cards.
    - Le header (utilisé aussi dans la page Preferences) contient le logo/nom de l'application et un menu déroulant pour choisir la langue de l'application
    - Barre de recherche, quand vide toutes les cards sont affichées, sinon en fonction de la chaîne de caractère saisie affiche les cards dont le titre/auteur contient la chaîne
        de caractère. Le bouton avec le loupe sert plus de repère visuel.
    - Les cards, image de couverture du livre + texte si en cour de lecture + barre progression de la lecture avec valeur numérique, titre du livre et auteur
        Clicable, "affiche la page Lecture" avec les données du livre correspondant
    - Navigation (aussi utilisée dans la page Preference), permet d'aller de la page Bibliotheque à la page Preference et inversement, le bouton librairie est factice. 

- Lecture , affiche la page en cours du livre sélectionné. Le contenu des livres n'étant pas fournie, un texte (insensible au choix de la langue) sert de remplissage
    - Un bouton retour à la page bibliotheque avec à côté le titre et le nom de l'auteur (en français seulement)
    - La barre de progression est fonctionnelle (mais dans les données fournie il y a juste un nombre indiquant le pourcentage de lecture du livre, 
        car le contenu du livre n'est pas fournie)
    - Le texte est contenu temporaire, il sera remplacer par le vrai contenu du livre avec les divers traductions (pas dans l'examen)
    -le VoletParametre , au clic il s'ouvre et affiche les paramètres liés à la typographie et à la lecture, se referme quand on clic en dehors.
        En modifiant les paramètres cela change le texte (chapitre et contenu) de la page Lecture.

- Preference , affiche tout les paramètres disponibles sur l'application
    -le header et la navigation utilisés dans la page Bibliotheque sont aussi utilisés ici 
    -boite apparence, boutons pour changer le thème de l'aplication, la couleur de certains éléments et la langue de l'interface
    -la boite TypeText est la même que celle de VoletParametre
    -la boite données contient un bouton qui remet les valeurs d'origine des paramétrages  

L'affichage général n'est pas la copie conforme de la maquette figma mais s'en rapproche le plus possible
Il n'y a pas les options , Theme : contraste élevé , ni Police : MONOSPACE car ils sont pas présent dans le fichier json fournie
    le fichier json contient des données fournie par le client, on ne peut pas le modifier sans son accord.

Cependant j'ai rajouté les traduction pour le paramètre "espacements des mots" dans translations.json

 => d'une part pour montrer que je sais modifier un fichier .json servant de base de données (et donc aller chercher de l'information dedans)
 => d'autre part l'input range pour l'espacement des mots et demandé dans le cahier des charges mais n'apparait pas sur la maquette figma.
    J'ai fais le choix de l'ajouter (la traduction dans translations.json et dans mon code) contrement au Theme contraste élevé et Police MONOSPACE
    car cela ne modifié pas trop l'affichage final pour qu'il se rapproche de la maquette figma

    NORMALEMENT il aurait fallu en discuter avec le client pour soit modifier la maquette et le fichier translations.json, soit modifier le cahier des charges.

Il n'y a pas de responsive (le cahier des charges n'en parle pas), cependant la plupart des éléments sont adaptés à un éventail assez large de largeur et d'hauteur d'écran

Pour finir :
    - ce projet a 4 Context différent, et 23 composants (les composants servant de pages et ceux servant de boite inclus), voir reflexion.webp
        certains composant n'apparaissent pas sur reflexion.webp, cela permet de voir l'évolution de mon raisonnement
    -même chose pour la hiérarchie des Providers de main.jsx, la hiérarchie finale diffère de celle de base, la aussi pour montrer l'évolution de mon raisonnement
    