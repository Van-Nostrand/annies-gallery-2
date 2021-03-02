import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarBackgroundImage from "../../assets/martinandI-draft2.svg";

const Navbar = (props) => {
  let [ landingNav, setLandingNav ] = useState();

  let current = useLocation();

  const checkNav = () => {
    setLandingNav(current.pathname === "/" );
  }

  useEffect(() => {
    checkNav();
  })

  let navclass = `navbar${landingNav ? ' landing-nav' : ""}`;
  let imgclass = `navimage`;
  let titleclass = `title-container ${props.currentPage === "/" ? "landing-nav-title" : ""}`;


  return(
    <nav className={navclass} >

      <Link to="/" className={titleclass}>
        SCOUTBERRY
      </Link>

      <div className="link-container">

        <Link to="/about">About</Link>
        <Link to="/works">Works</Link>
        <Link to="/contact">Contact</Link>
        {/* <Link to="/">LANDING</Link> */}
    
      </div>

      <img className={imgclass} src={NavbarBackgroundImage} alt='martinandi' />
    </nav>
  );
}

export default Navbar;