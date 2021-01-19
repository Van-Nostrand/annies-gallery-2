import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";

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
} from "./CONSTANTS";

export default function App(){

  // let { path, url } = useRouteMatch();

  // console.log(path);
  // console.log(url);
 
  return(
    <Router>
      <Navbar  />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/about">
            <About data={PAGE_DATA["about"]} />
          </Route>
          <Route path="/works">
            <ImageGallery  artData={ART_DATA} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/details/:name" children={<Details artData={ART_DATA} />} />
        </Switch>
    </Router>
    
  );
}
