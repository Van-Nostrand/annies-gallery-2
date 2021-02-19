import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch, useLocation } from "react-router-dom";

import About from "./About";
import Details from "./Details";
import Navbar from "./Navbar";
import Contact from "./Contact";
import ImageGallery from "./ImageGallery";
import LandingPage from "./LandingPage";

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
    <div className='app-wrapper'>
      <Router>
     
        <Navbar landing={landingPage}  />
        <div className={landingPage ? 'content-container landing-content-container' : 'content-container'}>
          <Switch>
            <Route exact path="/">
              <LandingPage 
              
                setCurrentPage={setCurrentPage} 
                />
            </Route>
            <Route path="/about">
              <About 
              
                setCurrentPage={setCurrentPage} 
                data={PAGE_DATA["about"]} 
              />
            </Route>
            <Route path="/works">
              <ImageGallery 
              
                setCurrentPage={setCurrentPage}  
                artData={ART_DATA} 
              />
            </Route>
            <Route path="/contact">
              <Contact 
              
                setCurrentPage={setCurrentPage} 
              />
            </Route>
            <Route path="/details/:name" children={<Details artData={ART_DATA} />} /> 
          </Switch>
        </div>
      </Router>
    </div>
    
    
  );
}
