import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const BackgroundImageContainer = (props) => {

  let [ imagePath, setImagePath ] = useState();
  let [ landingPage, setLandingPage ] = useState();
  let current = useLocation();

  const checkCurrent = () => {
    setLandingPage(current.pathname === "/");
  }

  useEffect(() => {
    checkCurrent();
  });

  let containerclass = `background-image-container ${landingPage ? 'landing-page-background' : ""}`;

  useEffect(() => {
    const context = require.context('../../assets', false, /.*(threehands).*(png|jpe?g)$/);
    const images = context.keys().map(context);
    setImagePath(images[0]);
  },[]);

  if(imagePath){
    return (
      <div className={containerclass}>
        <img src={imagePath} alt="berrypicture" />
      </div>
    )
  }

  //import image here
  return(
    <div className={containerclass}>
      <span></span>
    </div>
  )
}

export default BackgroundImageContainer;