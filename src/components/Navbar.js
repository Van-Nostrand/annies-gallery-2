import React, {useState, useEffect} from "react";
// import HandIcon from "./HandIcon";
// import HandCursor from "./HAND-CUTOUT-sm.png";
// import NavbarNavlink from "./NavbarNavlink";

const XICONOFFSET = 120;
const YICONOFFSET = 20;

export const Navbar = (props) => {

    // const navLinks = [
    //     {title: "works", id: 0, highlighted: false, background: "none", color: "rgba(12,12,12,0.8)", opacity: "1"},
    //     {title: "about", id: 1, highlighted: false, background: "none", color: "rgba(12,12,12,0.8)", opacity: "1"},
    //     {title: "shop", id: 2, highlighted: false, background: "none", color: "rgba(12,12,12,0.8)", opacity: "1"},
    //     {title: "contact", id: 3, highlighted: false, background: "none", color: "rgba(12,12,12,0.8)", opacity: "1"}
    //   ],
    // const pageTitle = "Scoutberry",
      
    // 3

  // const handleMouseEnter = (e) => {
  //   // console.log(e.target);
  //   this.openMenu();
  // }

  // const handleMouseLeave = (e) => {
  //   // console.log(e.target);
  //   this.closeMenu();
  // }

  // const mouseEntersLink = (e) => {
  //   let icon = this.moveIcon(e.target);
  //   this.setState({icon});
  // }

  // const handleLinkExit = (e) => {
  //     let navLinks = this.toggleBackgroundColor(parseInt(e.target.id.split("-")[2]));
  //     this.setState({navLinks});
  // }

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   if(e.target.classList.contains("nav-link")){
  //     this.props.handleSelection(e.target.innerHTML);
  //   }
  //   else if(e.target.classList.contains("social-media-link")){
  //     console.log("media link");
  //   }
  // }

  // const moveIcon = (e) => {
  //   let element = e.getBoundingClientRect();
  //   let iconDiv = document.getElementById("icon-div");
  //   let translateX = Math.floor(element.x) - XICONOFFSET;
  //   let translateY = Math.floor(element.y) - YICONOFFSET;
  //   let icon = {
  //     style: {
  //       transform: `translate(${translateX}px, ${translateY}px)`
  //     }
  //   };
  //   return icon;
  // }

  // const toggleBackgroundColor = (id) => {
  //   let newstate = [...this.state.navLinks].map((link,i) => ({...link}));
  //   let navLinks = newstate.map((link, i) => {
  //     if(link.id === id) {
  //       return {
  //         ...link,
  //         color: "rgba(12,12,12,0.8)",
  //         background: "none",
  //         opacity: link.opacity === "1" ? "0" : "1",
  //         highlighted: !link.highlighted
  //       }
  //     }
  //     return link;
  //   });
  //   return navLinks;
  // }

  // const openMenu = (e) => {
  //   document.getElementById("nav-link-container").style.opacity = "1";
  // }

  // const closeMenu = (e) => {
  //   document.getElementById("nav-link-container").style.opacity = "0.6";
  // }


  return(
    <nav className="navbar" >

      <div className="title-container">
        <h1 className="title" >
          SCOUTBERRY
        </h1>
      </div>

      <div className="link-container">
        <button className="nav-button" onClick={(e) => console.log(`clicked ${e.target.innerHTML}`)}>
          works
        </button>
        <button className="nav-button" onClick={(e) => console.log(`clicked ${e.target.innerHTML}`)}>
          about
        </button>
        <button className="nav-button" onClick={(e) => console.log(`clicked ${e.target.innerHTML}`)}>
          shop
        </button>
        <button className="nav-button" onClick={(e) => console.log(`clicked ${e.target.innerHTML}`)}>
          contact
        </button>
      </div>

      {/* <div className="icon-container">
        <div className="social-media-link" id="faceb-icon" >
          <img className="icon-images" src="./facebook-icon.png" />
        </div>
        <div className="social-media-link" id="insta-icon" >
          <img className="icon-images" src="./instagram-icon.png" />
        </div>
      </div> */}

    </nav>
  );
}
/*
MOUSEENTER - only the bound element
MOUSEOVER - bound or child element
MOUSELEAVE - leave all descendents - does not bubble
  -link container
MOUSEOUT - leave individual descendents - bubbles
*/
