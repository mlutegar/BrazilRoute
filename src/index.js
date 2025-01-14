
import React from "react";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import { auth } from "./config/Firebase";
import { onAuthStateChanged } from "firebase/auth";

const container = document.getElementById("root");
const root = createRoot(container);

onAuthStateChanged(auth, (user)=> {
  if (user) {
    window.sessionStorage.setItem("accessToken", user.accessToken);
  } else {
    window.sessionStorage.removeItem("accessToken");
  }
});

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
