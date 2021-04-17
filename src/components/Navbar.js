import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarBackgroundImage from "../../assets/martinandI-draft4.svg";

const Navbar = (props) => {
  let [ landingNav, setLandingNav ] = useState();
  let [ shrinkNav, setShrinkNav ] = useState();

  let current = useLocation();

  const checkNav = () => {
    setLandingNav(current.pathname === "/" );
  }

  const shrinkTheNav = () => {
    setShrinkNav(!shrinkNav);
  }

  useEffect(() => {
    checkNav();
  })

  let imgclass = `navimage`;
  let titleclass = `nav-title ${props.currentPage === "/" ? "landing-nav-title" : ""}`;
  let linksclass = `link-container ${props.currentPage === "/" ? "landing-nav-links" : ""}`


  return(
    <header className="header-outer">

      <nav className="header-inner" >

        <Link to="/" className={titleclass}>
          SCOUTBERRY
        </Link>

        <div className={linksclass}>

          <Link to="/about">About</Link>
          <Link to="/works">Works</Link>
          <Link to="/contact">Contact</Link>
          {/* <Link to="/">LANDING</Link> */}
      
        </div>

        
      </nav>
      <img className={imgclass} src={NavbarBackgroundImage} alt='martinandi' onClick={shrinkTheNav} />
    </header>
  );
}

export default Navbar;