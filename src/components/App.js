import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./About";
import Details from "./Details";
import Navbar from "./Navbar";
import Contact from "./Contact";
import ImageGallery from "./ImageGallery";
import LandingPage from "./LandingPage";

import {
  ART_DATA,
  PAGE_DATA
} from "../constants/CONSTANTS";

export default function App(){

  let [ currentPage, setCurrentPage ] = useState();

  return(
    
    <Router>
      <Navbar currentPage={currentPage} />
      <div className='content-container' >
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
  );
}
