import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FamilyProfile from "./pages/Profiles/FamilyProfile.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/fam" element={<FamilyProfile />} />
      <Route path="/profile" element={<App />} />
    </Routes>
  </BrowserRouter>
);
