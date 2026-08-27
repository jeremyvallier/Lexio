import { NavLink } from "react-router-dom";

import { useLivres } from "../contextes/LivresContext";

export default function Nav() {
  const { livreSelectionne } = useLivres();

  return (
    <div className="re">
      <NavLink to="/">
        ←
      </NavLink>

      {livreSelectionne && (
        <>
          <h1>{livreSelectionne.title}</h1>

          <h2>{livreSelectionne.author}</h2>
        </>
      )}
    </div>
  );
}