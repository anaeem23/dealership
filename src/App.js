import "./App.css";
import Header from "./Components/Header/Header";
import NavBarM from "./Components/Navbar/NavbarMobile";
import NavBarD from "./Components/Navbar/NavbarDesktop";
import ByMakeModel from "./Components/CarSearch/ByMakeModel";
import { useState } from "react";
import RenderCarPage from "./Components/CarPage/RenderPage";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Inventory from "./Pages/Inventory";
import SearchMakeModel from "./Pages/Car Searches/SearchMakeModel";
import Home from "./Pages/Home";
import HeaderM from "./Components/Header/HeaderM";
import ByMakeModelM from "./Components/CarSearch/ByMakeModelM";




function App() {
  const [car, setCar] = useState(null);
  const [isMobile, setMobile] = useState(false);

  const handleResize = () => {
    const screenSize = window.screen.availWidth;
    if (screenSize < 800) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  window.addEventListener("resize", handleResize);

  return (
    <div className="body">
      <Router>
      {isMobile ? <HeaderM /> : <Header />}
        {isMobile ? <NavBarM /> : <NavBarD />}
        <ByMakeModelM />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dealership" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/inventory/:VIN" element={<RenderCarPage />} />
            <Route path="/inventory/Model/:Model" element={<SearchMakeModel />} />



          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
