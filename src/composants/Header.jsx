import { FaBookBookmark } from "react-icons/fa6";
//ce composant contient les composants :
//  ChoixLangue.jsx

import ChoixLangue from "./ChoixLangue";

// une div avec le titre et le logo de Lexio
export default function Header(){

    return(
        <div className="head">
            <div className="entete">
                <div className="lexio">
                    <FaBookBookmark className="logoLexio"/>
                    <h1>LEKTIO</h1>
                </div>
                <ChoixLangue/>
            </div>
        </div>
    )
}