import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {

  return(
    <nav className="navbar" >

      <div className="title-container">
        <h1 className="title" >
          SCOUTBERRY
        </h1>
      </div>

      <div className="link-container">
        <Link to="/">About</Link>
        <Link to="/works">Works</Link>
        <Link to="/contact">Contact</Link>
    
      </div>

    </nav>
  );
}

export default Navbar;