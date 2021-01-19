import React, { useState, useEffect } from "react";


const LandingPage = (props) => {

  let [ imagePath, setImagePath ] = useState();

  useEffect(() => {
    const context = require.context('../../assets', false, /.*(threehands).*(png|jpe?g)$/);
    const images = context.keys().map(context);
    setImagePath(images[0]);
  },[]);

  if(imagePath){
    return (
      <div className="landing-page-container">
      
        <div>LANDING PAGE</div>
        <div className="landing-image-wrapper">
          <img src={imagePath} alt="berrypicture" />
        </div>
      </div>
    )
  }

  //import image here
  return(
    <div className="landing-page-container">
      
      <div>LANDING PAGE</div>
      <div className="landing-image-wrapper">
        <span></span>
      </div>
    </div>
  )
}

export default LandingPage;