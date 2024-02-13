import "../Styles/main.css"

import { useRef } from "react";
import {FaBars, FaTimes } from "react-icons/fa";


 function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
  return (
    <header>
      <div className="logo"></div>
      <nav ref= {navRef}>
        <a href="/">Home</a>
        <a href="/About-us">About Us</a>
        <a href="/Services">Services</a>
        <a href="/Contact">Contact Us</a>
        <a className="logIn" href="/login">Log In</a>
        <a href="/SignUp"><button className=" btn w3-hide-small">Sign Up</button></a>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
