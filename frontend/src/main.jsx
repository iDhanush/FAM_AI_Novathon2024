import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FamilyProfile from "./pages/Profiles/FamilyProfile.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import { StoreProvider } from "./context/StoreContext.jsx";

createRoot(document.getElementById("root")).render(
  <StoreProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/family-profile" element={<FamilyProfile />} />
        <Route path="/profile-page" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  </StoreProvider>
);
