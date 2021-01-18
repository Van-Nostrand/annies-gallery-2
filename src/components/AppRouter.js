import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";

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

export default function AppRouter(){

 

  return(
    <Router>
      <Navbar  />

      <div className="pagewrapper">
        <Switch>
          <Route exact path="/">
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
      </div>
    </Router>
    
  );
}

// return (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/topics">Topics</Link>
//         </li>
//       </ul>

//       <hr />

//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/topics">
//           <Topics />
//         </Route>
//       </Switch>
//     </div>
//   </Router>
// );