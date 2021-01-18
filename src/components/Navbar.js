import React from "react";

const Navbar = (props) => {

  return(
    <nav className="navbar" >

      <div className="title-container">
        <h1 className="title" >
          SCOUTBERRY
        </h1>
      </div>

      <div className="link-container">
        <button className="nav-button" onClick={() => props.setCurrentPage("works")}>
          works
        </button>
        <button className="nav-button" onClick={() => props.setCurrentPage("about")}>
          about
        </button>
        <button className="nav-button" onClick={() => props.setCurrentPage("shop")}>
          shop
        </button>
        <button className="nav-button" onClick={() => props.setCurrentPage("contact")}>
          contact
        </button>
      </div>

    </nav>
  );
}

export default Navbar;