import { NavLink } from "react-router-dom";

import { useLivres } from "../contextes/LivresContext";
import { IoIosArrowBack } from "react-icons/io";
export default function Nav() {
  const { livreSelectionne } = useLivres();

  return (
    <div className="re">
      <NavLink to="/">
        <IoIosArrowBack />
      </NavLink>

      {livreSelectionne && (
        <div className="infos-livre">
          <h1>{livreSelectionne.title}</h1>

          <h2>{livreSelectionne.author}</h2>
        </div>
      )}
    </div>
  );
}