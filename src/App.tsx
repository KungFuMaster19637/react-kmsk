// import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Bestuur from "./pages/Bestuur";
import Inschrijven from "./pages/Inschrijven";
import Verzekering from "./pages/Verzekering";
import Stapjestoernooi from "./pages/Stapjestoernooi";
import Ligging from "./pages/Ligging";
import Jeugd from "./pages/Jeugd/Jeugd";

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

          {/* Toernooien */}
          <Route path="/stapjestoernooi" element={<Stapjestoernooi />}></Route>
          {/* Teamcompetitie */}

          {/* Links */}
        </Routes>
      </div>
    </>
  );
}

export default App;
