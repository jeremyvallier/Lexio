import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

import PreferencesProvider from "./contextes/PreferencesContext";
import LanguesProvider from "./contextes/LanguesContext";
import LivresProvider from "./contextes/LivresContext";
import UIProvider from "./contextes/UIContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PreferencesProvider>
      <LanguesProvider>
        <LivresProvider>
          <UIProvider>
            <App />
          </UIProvider>
        </LivresProvider>
      </LanguesProvider>
    </PreferencesProvider>
  </StrictMode>
);