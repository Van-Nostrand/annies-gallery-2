import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const LandingPage = (props) => {

  useEffect(() => {
    props.setCurrentPage("/");
  })

  

  //import image here
  return(
    <Link to='/works' className="landing-page-container">
      <div className={`titlediv`}>SCOUTBERRY</div>
    </Link>
  )
}

export default LandingPage;