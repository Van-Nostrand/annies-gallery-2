import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./About";
import Details from "./Details";
import Navbar from "./Navbar";
import Contact from "./Contact";
import ImageGallery from "./ImageGallery";
import Shop from "./Shop";
import {
  ART_DATA,
  PAGE_DATA
} from "./CONSTANTS";

export default function App(){

  const [ cart, setCart ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState("about");

  let page;
  switch(true){
    case /works/.test(currentPage):
      page = <ImageGallery 
              selectWork={setCurrentPage} 
              artData={ART_DATA} />;
      break;
    case /about/.test(currentPage):
      page = <About data={PAGE_DATA["about"]}  />;
      break;
    case /shop/.test(currentPage):
      page = <Shop  />;
      break;
    case /contact/.test(currentPage):
      page = <Contact  />;
      break;
    case /^details/.test(currentPage):
      // say it gets "details-halo 1"
      let selected = ART_DATA.filter((art) => art.name === currentPage.split("-")[1]);
      
      page = <Details subject={selected[0]}  />
      break;
    default: page = <div>PLACEHOLDER</div>;
  }

  return(
    <div id="gallery-div">
      <Navbar setCurrentPage={setCurrentPage} />
      {page}
    </div>
  );
}