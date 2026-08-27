import BarreProgression from "./BarreProgression";
import { useLivres } from "../contextes/LivresContext";
import { useNavigate } from "react-router-dom";

import lePetitPrince from "../data/cover/le_petit_prince.png";
import lEtranger from "../data/cover/l_etranger.png";
import dune from "../data/cover/dune.png";
import livre1984 from "../data/cover/1984.png";
import lesMiserables from "../data/cover/les_miserables.png";
import sapiens from "../data/cover/sapiens.png";

export default function Card({ livre }) {
  const { ouvrirLivre } = useLivres();

  const navigate = useNavigate();

  const couvertures = {
    "le_petit_prince.png": lePetitPrince,
    "l_etranger.png": lEtranger,
    "dune.png": dune,
    "1984.png": livre1984,
    "les_miserables.png": lesMiserables,
    "sapiens.png": sapiens,
  };

  function ouvrirLecture() {
    ouvrirLivre(livre);

    navigate("/Lecture");
  }

  return (
    <article
      className="cardlivre"
      onClick={ouvrirLecture}
    >
      <div className="imgcard">
        <img
          src={couvertures[livre.coverKey]}
          alt={`Couverture de ${livre.title}`}
        />

        {livre.readingProgress > 0 &&
          livre.readingProgress < 100 && (
            <p>En cours</p>
          )}

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