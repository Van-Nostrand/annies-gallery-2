import React, { useState, useEffect } from "react";


const LandingPage = (props) => {

  useEffect(() => {
    props.setCurrentPage(window.location);
  })

  //import image here
  return(
    <div className="landing-page-container">
      
      <div>LANDING PAGE</div>

    </div>
  )
}

export default LandingPage;