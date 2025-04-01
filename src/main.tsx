import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css';
import { GlobalStyle } from "../Globalstyled";
import { AppContextProvider } from "./contexts/AppContextProvider";

// تایید وجود عنصر root
const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
  createRoot(rootElement).render(
    <AppContextProvider>
      <StrictMode>
        <GlobalStyle />
        <App />
      </StrictMode>
    </AppContextProvider>
  );
} else {
  console.error('Root element not found');
}
