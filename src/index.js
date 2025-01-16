import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import { HashRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
      <HashRouter>
        <Home /> {/* Diretamente a página Home */}
      </HashRouter>
    </React.StrictMode>
);
