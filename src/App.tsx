// import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Bestuur from "./pages/Bestuur";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Contact: */}
        <Route path="/bestuur" element={<Bestuur />} />
      </Routes>
      <p>Hello world</p>
    </>
  );
}

export default App;
