import React, { useState, useEffect } from "react";

import About from "./About";
// import Contact from "./Contact";
import Details from "./Details";
// import GalleryNavbarGrid from "./GalleryNavbarGrid";
import {Navbar} from "./Navbar";
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
  switch(currentPage){
    case "works":
      page = <ImageGallery 
              selectWork={setCurrentPage} 
              artData={ART_DATA} />;
      break;
    case "about":
      page = <About data={PAGE_DATA["about"]}/>;
      break;
    case "shop":
      page = <Shop />;
      break;
    // case "contact":
    //   page = <Contact />;
    //   break;
    case "details":
      let selected = ART_DATA.filter((art) => art.name === currentPage)[0];
      page = <Details subject={selected} addToCart={handleAddToCart} />
      break;
    default: page = <div>PLACEHOLDER</div>;
  }

  return(
    <div id="gallery-div">
      <Navbar />
      {page}
    </div>
  );
}