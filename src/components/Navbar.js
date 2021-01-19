import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
  let [ landingNav, setLandingNav ] = useState();

  let current = useLocation();
  console.log(current);
  // console.log(match);
  const checkNav = () => {
    setLandingNav(current.pathname === "/" );
  }

  useEffect(() => {
    checkNav();
  })

  let navclass = `navbar ${landingNav ? 'landing-nav' : ""}`;

  // console.log(match);

  return(
    <nav className={navclass} >

      <div className="title-container">
        <h1 className="title" >
          SCOUTBERRY
        </h1>
      </div>

      <div className="fake-line"></div>

      <div className="link-container">
        <Link to="/about">About</Link>
        <Link to="/works">Works</Link>
        <Link to="/contact">Contact</Link>
    
      </div>

    </nav>
  );
}

export default Navbar;