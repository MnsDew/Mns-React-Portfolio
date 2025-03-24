import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/amthal">Quotes</Link>
        <Link className="nav-link" to="/Gallery">Gallery</Link>
      </nav>
    </header>
  );
}; 
 // "start": "react-scripts start",
 // "start": "serve -s build",
export default Header;
