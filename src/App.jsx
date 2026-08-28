// Importe les composants nécessaires à la gestion
// de la navigation entre les différentes pages de l'application. (librairie react-router)
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importe les composants correspondant aux différentes pages.
import Bibliotheque from "./pages/Bibliotheque";
import Lecture from "./pages/Lecture";
import Preferences from "./pages/Preferences";
// Importe la feuille de style globale de l'application. (lie le style au code)
import "./App.css";

function App() {
  return (
    // BrowserRouter active le système de navigation
    // de React Router dans toute l'application.
    <BrowserRouter>
    {/* Routes contient l'ensemble des routes disponibles. */}
      <Routes>
        {/* Chaque composant Route associe une URL à un composant React.
          Ici, l'URL "/" correspond à la page
          principale : Bibliotheque.*/}
        <Route path="/" element={<Bibliotheque />} />

        {/*Lorsque l'utilisateur accède à "/Lecture", le composant Lecture est affiché.*/}
        <Route path="/Lecture" element={<Lecture />}/>

        {/*Lorsque l'utilisateur accède à "/Preferences", le composant Preferences est affiché.*/}
        <Route path="/Preferences" element={<Preferences />}/>
      </Routes>
    </BrowserRouter>
  );
}

// Exporte le composant App afin qu'il puisse être
// utilisé comme composant principal de l'application.
export default App;