import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import "./App.css";
import "./Styles/main.css";
import Navbar from "./Components/Navbar.js";
import About from "./pages/About.js";
import Services from "./pages/Services.js";
import Contact from "./pages/Contact.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import Home from "./pages/home.js";

function App() {
  return (
    <>
      <PageRouter />
    </>
  );
}

const PageRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* <Route path="/" exact element={<Home />} /> */}
          <Route path="/" exact element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
