import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext.js";
import { AlbumProvider } from "./contexts/AlbumContext.js";
import { FilterProvider } from "./contexts/FilterContext.js";
import App from "./pages/App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AlbumProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </AlbumProvider>
    </AuthProvider>
  </React.StrictMode>
);
