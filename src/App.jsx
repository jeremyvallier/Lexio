import { BrowserRouter, Routes, Route } from "react-router-dom";

import Bibliotheque from "./pages/Bibliotheque";
import Lecture from "./pages/Lecture";
import Preferences from "./pages/Preferences";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bibliotheque />} />

        <Route
          path="/Lecture"
          element={<Lecture />}
        />

        <Route
          path="/Preferences"
          element={<Preferences />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;