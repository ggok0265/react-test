import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import KakaoMap from "./pages/KakaoMap.jsx";
import styles from "./App.module.css";
import Nav from "./pages/Nav.jsx";

function App() {
  return (
    <>
    <Nav className={styles.nav} />
    <Router>
      <nav className="p-4 bg-gray-100 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/map">Map</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/map" element={<KakaoMap />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;