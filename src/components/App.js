import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch, useLocation } from "react-router-dom";

import About from "./About";
import Details from "./Details";
import Navbar from "./Navbar";
import Contact from "./Contact";
import ImageGallery from "./ImageGallery";
import LandingPage from "./LandingPage";
import BackgroundImageDiv from "./BackgroundImageDiv";
// import BackgroundImageElement from "./BackgroundImageElement";
import BackgroundImage from "./BackgroundImage";
import Shop from "./Shop";
import {
  ART_DATA,
  PAGE_DATA
} from "../constants/CONSTANTS";

export default function App(){

  let [ landingPage, setLandingPage ] = useState(true);
  let [ currentPage, setCurrentPage ] = useState();

  useEffect(() => {
    console.log(currentPage);
  },[currentPage])

  return(
    <Router>
      <BackgroundImage />
      <Navbar landing={landingPage}  />
      <div className={landingPage ? 'content-container landing-content-container' : 'content-container'}>
        <Switch>
          <Route exact path="/">
            <LandingPage 
              // checkLocation={checkLocation} 
              setCurrentPage={setCurrentPage} 
              />
          </Route>
          <Route path="/about">
            <About 
              // checkLocation={checkLocation} 
              setCurrentPage={setCurrentPage} 
              data={PAGE_DATA["about"]} 
            />
          </Route>
          <Route path="/works">
            <ImageGallery 
              // checkLocation={checkLocation} 
              setCurrentPage={setCurrentPage}  
              artData={ART_DATA} 
            />
          </Route>
          <Route path="/contact">
            <Contact 
              // checkLocation={checkLocation} 
              setCurrentPage={setCurrentPage} 
            />
          </Route>
          <Route path="/details/:name" children={<Details artData={ART_DATA} />} /> 
        </Switch>
      </div>
    </Router>
    
  );
}
