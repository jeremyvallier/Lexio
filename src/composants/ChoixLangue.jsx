
//ce composant est une liste déroulante où l'on peut choisir la langue de l'application (FR/EN/ES)
export default function ChoixLangue(){

    return(
        <select name="choixLangue" id="choix" className="choixLangue">
            <option value="FR">FR</option>
            <option value="EN">EN</option>
            <option value="ES">ES</option>
        </select>
    )
}