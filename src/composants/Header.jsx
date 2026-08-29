import { FaBookBookmark } from "react-icons/fa6";

// Composant permettant de sélectionner la langue de l'application.
import ChoixLangue from "./ChoixLangue";

// Composant représentant l'en-tête commun de l'application.
// Il contient le logo et le nom de l'application, ainsi que le sélecteur de langue.
export default function Header(){

    return(
        <div className="head">
            <div className="entete">
                <div className="lexio">
                    <FaBookBookmark className="logoLexio"/>
                    <h1>LEKTIO</h1>
                </div>
                   {/* Le sélecteur de langue est placé dans le header
                    afin d'être accessible depuis les différentes pages
                    qui utilisent ce composant.*/}
                <ChoixLangue/>
            </div>
        </div>
    )
}