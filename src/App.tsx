import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Bestuur from "./pages/Bestuur";
import Inschrijven from "./pages/Inschrijven/Inschrijven";
import Verzekering from "./pages/Verzekering/Verzekering";
import Stapjestoernooi from "./pages/Stapjestoernooi";
import Ligging from "./pages/Ligging";
import Jeugd from "./pages/Jeugd/Jeugd";
import JeugdKalender from "./pages/JeugdKalender";
import Lesgevers from "./pages/Lesgevers";
import ZilverenToren from "./pages/ZilverenToren/ZilverenToren";
import Kalender from "./pages/Kalender/Kalender";
import Links from "./pages/Links/Links";
import Interclub from "./pages/Interclub/Interclub";
import Login from "./pages/Login/Login";
import VerslagenZT from "./pages/Verslagen/VerslagenZT";
import VerslagenIC from "./pages/Verslagen/VerslagenIC";
import BlogForm from "./components/Blog/BlogForm";
import BlogDelete from "./components/Blog/BlogDelete";

function App() {
  return (
    <>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
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
          <Route path="/interclub" element={<Interclub />}></Route>
          <Route path="/kalender" element={<Kalender />}></Route>
          <Route path="/verslagenZT" element={<VerslagenZT />}></Route>
          <Route path="/verslagenIC" element={<VerslagenIC />}></Route>
          <Route
            path="/verslagFormZT/:subject/:postId/:update"
            element={<BlogForm />}
          />
          <Route
            path="/verslagFormIC/:subject/:postId/:update"
            element={<BlogForm />}
          />

          <Route
            path="/verslagDelete/:subject/:postId"
            element={<BlogDelete />}
          ></Route>

          {/* Links */}
          <Route path="/links" element={<Links />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
