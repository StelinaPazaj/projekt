import logo from "./logo.svg";
import "./App.css";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
function App() {
  return (
    <div>
      <NavComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FooterComp />
    </div>
  );
}

export default App;
