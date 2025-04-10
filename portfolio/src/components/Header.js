import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/amthal">Quotes</Link>
        <Link className="nav-link" to="/Technologies">Technologies</Link>
      </nav>
    </header>
  );
}; 
//  "start": "react-scripts start",

   // "scripts": {
  //   "start": "serve -s build",
    
  //   "build": "react-scripts build",
  //   "dev": "react-scripts dev",
  //   "test": "react-scripts test",
  //   "eject": "react-scripts eject"
  // },


export default Header;
