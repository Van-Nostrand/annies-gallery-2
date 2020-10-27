import React, {Component} from "react";
import HandIcon from "./HandIcon";
import HandCursor from "./HAND-CUTOUT-sm.png";
import NavbarNavlink from "./NavbarNavlink";

const XICONOFFSET = 120;
const YICONOFFSET = 20;

class GalleryNavbarGrid2 extends Component{
  constructor(props){
    super(props);

    this.state = {
      navLinks: [
        {title: "works", id: 0, highlighted: false, background: "none", color: "rgba(12,12,12,0.8)", opacity: "1"},
        {title: "about", id: 1, highlighted: false, background: "none", color: "rgba(12,12,12,0.8)", opacity: "1"},
        {title: "shop", id: 2, highlighted: false, background: "none", color: "rgba(12,12,12,0.8)", opacity: "1"},
        {title: "contact", id: 3, highlighted: false, background: "none", color: "rgba(12,12,12,0.8)", opacity: "1"}
      ],
      pageTitle: "Scoutberry",
      colors: [
        "rgba(228, 199, 79, 1)",
        "rgba(82, 199, 71, 1)",
        "rgba(226, 94, 19, 1)",
        "rgba(181, 70, 212, 1)",
        "rgba(64, 72, 233, 1)",
        "rgba(146, 173, 106, 1)",
        "rgba(254, 42, 42, 1)",
        "rgba(8, 104, 119, 1)",
        "rgba(66, 158, 0, 1)",
        "rgba(76, 9, 193, 1)"
      ],
      defaultColor: "rgba(12,12,12,0.8)",
      icon: {
        style: {
          transform: `translate(${0}px,${0}px)`
        }
      }

    };
    this.testingMouseStuff = this.testingMouseStuff.bind(this);

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleLinkExit = this.handleLinkExit.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.toggleBackgroundColor = this.toggleBackgroundColor.bind(this);
    this.cycleColors = this.cycleColors.bind(this);
    this.moveIcon = this.moveIcon.bind(this);
    this.mouseEntersLink = this.mouseEntersLink.bind(this);
  };

  handleMouseEnter(e){
    // console.log(e.target);
    this.openMenu();
  }

  handleMouseLeave(e){
    // console.log(e.target);
    this.closeMenu();
  }

  mouseEntersLink(e){
    let icon = this.moveIcon(e.target);
    this.setState({icon});
  }

  handleLinkExit(e){
      let navLinks = this.toggleBackgroundColor(parseInt(e.target.id.split("-")[2]));
      this.setState({navLinks});
  }

  handleClick(e){
    e.preventDefault();
    if(e.target.classList.contains("nav-link")){
      this.props.handleSelection(e.target.innerHTML);
    }
    else if(e.target.classList.contains("social-media-link")){
      console.log("media link");
    }
  }

  moveIcon(e){
    let element = e.getBoundingClientRect();
    let iconDiv = document.getElementById("icon-div");
    let translateX = Math.floor(element.x) - XICONOFFSET;
    let translateY = Math.floor(element.y) - YICONOFFSET;
    let icon = {
      style: {
        transform: `translate(${translateX}px, ${translateY}px)`
      }
    };
    return icon;
  }

  cycleColors(id){
    let newLinks = [...this.state.navLinks].map((link,i) => link);
    let navLinks = newLinks.map((link, i) => {

      if(link.id === id){
        return {
          ...link,
          background: this.state.colors[Math.floor(Math.random()*this.state.colors.length)],
          color: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
        };
      }
      return link;
    });

    this.setState({navLinks});
  }

  toggleBackgroundColor(id){
    let newstate = [...this.state.navLinks].map((link,i) => ({...link}));
    let navLinks = newstate.map((link, i) => {
      if(link.id === id) {
        return {
          ...link,
          color: "rgba(12,12,12,0.8)",
          background: "none",
          opacity: link.opacity === "1" ? "0" : "1",
          highlighted: !link.highlighted
        }
      }
      return link;
    });
    // console.log(navLinks);
    // console.log("returning navlinks");
    return navLinks;
    // console.log(navLinks);
  }

  openMenu(e){
    document.getElementById("nav-link-container").style.opacity = "1";
  }

  closeMenu(e){
    document.getElementById("nav-link-container").style.opacity = "0.6";
  }

  testingMouseStuff(e){
    console.log(e);
  }
  componentDidMount(){
    let icon = this.moveIcon(document.getElementById(`nav-link-0`));
    this.setState({icon});
  }

  render(){
    let title = this.state.pageTitle.split("").map((char, i) =>
        <span
          className="title-letter"
          key={`titlespan-${i}`}>{char}</span>
    );

    let links = this.state.navLinks.map((link, i) =>
        <div
          className="nav-link"
          key={`nav-link-${i}`}
          id={`nav-link-${i}`}
          style={{
            background: link.background,
            color: link.color,
            opacity: link.opacity
          }}
          onMouseEnter={this.mouseEntersLink}
          onClick={this.handleClick}
        >{link.title}</div>
    );
    let handIcon = <HandIcon style={this.state.icon.style} />


    return(
      <nav
        id="gallery-navbar"
        fixed="top"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        <div id="icon-div">
          <div className="social-media-link" id="faceb-icon" onClick={this.handleClick}>
            <img className="icon-images" src="./facebook-icon.png" />
          </div>
          <div className="social-media-link" id="insta-icon" onClick={this.handleClick}>
            <img className="icon-images" src="./instagram-icon.png" />
          </div>
        </div>

        <div id="page-title-container">
          <h1 id="page-title" >{title}</h1>
        </div>
        <div
          id="nav-link-container"
          >
          {links}
          {handIcon}
        </div>
        <div id="fake-border"></div>
      </nav>
    )
  }
}

export default GalleryNavbarGrid2;

// <div id="cart-div">
//   <img id="cart-icon" className="icon-images" src="./basket-cart-icon.png" />
// </div>

/*
MOUSEENTER - only the bound element
MOUSEOVER - bound or child element
MOUSELEAVE - leave all descendents - does not bubble
  -link container
MOUSEOUT - leave individual descendents - bubbles
*/
