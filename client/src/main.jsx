import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Map from "./components/Map/MapView";
import List from "./pages/List";
import GisementDetail from "./pages/GisementDetail";
import Profile from "./pages/Profile";
import Home from "./pages/Homepage";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import PhotoContextProvider from "./contexts/PhotoContext";
import Navbar from "./components/Navbar";
import PrendrePhoto from "./pages/PrendrePhoto";
import AjouterGisement from "./pages/AjouterGisement";
import Badges from "./page/Badges";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PhotoContextProvider>
      <UserContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/routes" element={<App />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/list" element={<List />} />
            <Route path="/detail/:gisementId" element={<GisementDetail />} />
            <Route path={"/map"} element={<Map />} />
            <Route path={"/photo"} element={<PrendrePhoto />} />
            <Route path={"/ajouter-gisement"} element={<AjouterGisement />} />
            <Route path={"/badges"} element={<Badges />} />
          </Routes>
          <Navbar />
        </Router>
      </UserContextProvider>
    </PhotoContextProvider>
  </React.StrictMode>
);
