import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import './index.css'
import { GlobalStyle } from "../Globalstyled.js";
import { AppContextProvider } from "./contexts/AppContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <StrictMode>
      <GlobalStyle />
      <App />
    </StrictMode>
  </AppContextProvider>
);
