import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import { Routes, Route, Router } from "react-router-dom";
import Bestuur from "./pages/Bestuur";
import Inschrijven from "./pages/Inschrijven/Inschrijven";
import Verzekering from "./pages/Verzekering";
import Stapjestoernooi from "./pages/Stapjestoernooi";
import Ligging from "./pages/Ligging";
import Jeugd from "./pages/Jeugd/Jeugd";
import JeugdKalender from "./pages/JeugdKalender";
import Lesgevers from "./pages/Lesgevers";
import ZilverenToren from "./pages/ZilverenToren/ZilverenToren";
import Kalender from "./pages/Kalender/Kalender";

function App() {
  return (
    <>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* Contact: */}
          <Route path="/bestuur" element={<Bestuur />} />
          <Route path="/ligging" element={<Ligging />} />

          {/* Jeugd */}
          <Route path="/jeugd" element={<Jeugd />} />
          <Route path="/inschrijven" element={<Inschrijven />} />
          <Route path="/verzekering" element={<Verzekering />} />
          <Route path="/jeugdkalender" element={<JeugdKalender />} />
          <Route path="/lesgevers" element={<Lesgevers />} />

          {/* Toernooien */}
          <Route path="/stapjestoernooi" element={<Stapjestoernooi />}></Route>
          {/* Teamcompetitie */}
          <Route path="/zilverentoren" element={<ZilverenToren />}></Route>
          <Route path="/interclub" element={<ZilverenToren />}></Route>
          <Route path="/kalender" element={<Kalender />}></Route>

          {/* Links */}
        </Routes>
      </div>
    </>
  );
}

export default App;
