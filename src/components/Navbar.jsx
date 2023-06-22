import React from "react";
import{ Link } from "react-router-dom";
import Logo from "../assets/Logo.png"
import "../styles/Navbar.css";
function Navbar() {
    return(
        <div className="navbar">
          <div className="leftSide"></div>
          <img src={Logo} />
          <div className="rightside">
            <Link to="/"> Home</Link>
            <Link to="/product"> Our Products</Link>
            <Link to="/about"> About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
    );
}
export default Navbar;