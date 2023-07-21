import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Connexion from "./admin/Connexion";
import Gestion from "./admin/Gestion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/admin" element={<Connexion />} />
      <Route path="/admin/gestion" element={<Gestion />} />
    </Routes>
  );
}

export default App;
