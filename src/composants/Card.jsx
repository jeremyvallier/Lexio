import BarreProgression from "./BarreProgression";
import { useLivres } from "../contextes/LivresContext";
import { useNavigate } from "react-router-dom";
//importe les images des couvertures des livres
import lePetitPrince from "../data/cover/le_petit_prince.png";
import lEtranger from "../data/cover/l_etranger.png";
import dune from "../data/cover/dune.png";
import livre1984 from "../data/cover/1984.png";
import lesMiserables from "../data/cover/les_miserables.png";
import sapiens from "../data/cover/sapiens.png";

// Composant qui affiche les informations d'un livre
// sous la forme d'une carte dans la bibliothèque.
export default function Card({ livre }) {

  // Récupère la fonction permettant d'enregistrer le livre comme étant actuellement sélectionné
  const { ouvrirLivre } = useLivres();

  // Hook de React Router permettant de changer de page depuis le code JavaScript.
  const navigate = useNavigate();

  // Association entre la clé de couverture enregistrée dans books.json et l'image importée correspondante.
  const couvertures = {
    "le_petit_prince.png": lePetitPrince,
    "l_etranger.png": lEtranger,
    "dune.png": dune,
    "1984.png": livre1984,
    "les_miserables.png": lesMiserables,
    "sapiens.png": sapiens,
  };

  // Fonction appelée lorsque l'utilisateur clique sur la carte d'un livre.
  function ouvrirLecture() {
    ouvrirLivre(livre);
    // Navigue ensuite vers la page de lecture
    navigate("/Lecture");
  }

  return (
    <article
      className="cardlivre"
      onClick={ouvrirLecture}
    >
      <div className="imgcard">
        <img
          // Sélectionne automatiquement la bonne couverture grâce à la valeur coverKey du livre.
          src={couvertures[livre.coverKey]}
          // Texte alternatif utile pour l'accessibilité.
          alt={`Couverture de ${livre.title}`}
        />

         {/* Affiche "En cours" uniquement si le livre a commencé
          mais n'est pas encore terminé.
          > 0  : le livre a commencé
          < 100 : le livre n'est pas terminé*/}
        {livre.readingProgress > 0 &&
          livre.readingProgress < 100 && (
            <p>En cours</p>
          )}

         
         {/* Affiche la barre de progression du livre.
          La valeur readingProgress vient des données du livre.
          className permet ici d'ajouter "barrecard" à la classe
          du composant BarreProgression afin de lui appliquer
          un style spécifique dans une carte. */}
        <BarreProgression
          className="barrecard"
          progression={livre.readingProgress}
        />
      </div>

      <div className="author">
        <h2>{livre.title}</h2>

        <p>{livre.author}</p>
      </div>
    </article>
  );
}