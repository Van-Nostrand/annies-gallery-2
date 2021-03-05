import React, {useState, useRef} from "react";
import {useCustomScrollRef} from "../hooks/useCustomScrollRef";
import pclogo from "../assets/pclogo.png";

export const NavHat = ({changePage}) => {
  let menuSwitchRef = useRef(null);
  let show = useCustomScrollRef(menuSwitchRef, 1000);
  let [mobileNavOpen, setMobileNavOpen] = useState(false);

  let leftButtons = (<>
    <button onClick={() => changePage("food")}>FOOD</button>      
    <button onClick={() => changePage("drinks")}>DRINKS</button>
  </>)

  let rightButtons = (<>
    <button onClick={() => changePage("specials")}>HAPPY-HOUR</button>
  </>)

  let mobileButtons = (<>
    <button onClick={() => changePage("food")}>FOOD</button> 
    <button onClick={() => changePage("drinks")}>DRINKS</button>
    <button onClick={() => changePage("specials")}>HAPPY-HOUR</button>
  </>)

  let mobileMenu = (<>
    <button onClick={() => changePage("food")}>FOOD</button> 
    <button onClick={() => changePage("drinks")}>DRINKS</button>
    <button onClick={() => changePage("specials")}>HAPPY-HOUR</button>
  </>)

  let secondaryNavButtons = (<>
    {leftButtons}
    {rightButtons}
  </>)

  let menuHamburger = (
    <div className="menu-burger" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
      <svg viewBox="0 0 100 100" width="30" height="30">
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>
    </div>
    
  )

  return(
    <div className="nav-hat-wrapper">
    
      <nav className="full-nav" >

        <NavButtonGroup classString={"full-nav__group-left"} buttons={leftButtons} />

        <span className="full-nav__group-logo">
          <img src={pclogo} />
        </span>

        <NavButtonGroup classString={"full-nav__group-right"} buttons={rightButtons} />

      </nav>


      <nav className={show ? "secondary-nav secondary-nav-open" : "secondary-nav"}>
        <NavButtonGroup classString={"secondary-nav__group"} buttons={secondaryNavButtons}/>
      </nav>
      

      <nav className="mobile-nav" >

        {/* {menuHamburger} */}

        <MobileNavDrawer open={mobileNavOpen} buttons={mobileMenu} />

        <NavButtonGroup classString={"mobile-nav__buttons"} buttons={mobileButtons} />

        <span className="mobile-nav__logo" >
          <img src={pclogo} />
        </span>

      </nav>
      <div className="secondary-nav-scroll-target" ref={menuSwitchRef} ></div>

    </div>
  )

  
};

const MobileNavDrawer = (props) => {

  let classString = props.open ? "mobile-nav-drawer opendrawer" : "mobile-nav-drawer";
 
  return(
    <div className={classString}>
      {props.buttons}
    </div>
  )
}

const NavButtonGroup = (props) => {

  return (
    <div className={props.classString} onClick={() => console.log("CLICKED!!")}>
      {props.buttons}
    </div>
  )
}