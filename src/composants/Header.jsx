
//ce composant contient les composants :
//  ChoixLangue.jsx

import ChoixLangue from "./ChoixLangue";

// une div avec le titre et le logo de Lexio
export default function Header(){

    return(
        <div className="entete">
            <div className="Lexio">
                <p className="logoLexio">Logo</p>
                <h1>LEKTIO</h1>
            </div>
            <ChoixLangue/>
        </div>
    )
}