import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const BackgroundImage = () => {

  let [ imagePath, setImagePath ] = useState();
  let [ landingPage, setLandingPage ] = useState();
  let current = useLocation();

  const checkCurrent = () => {
    setLandingPage(current.pathname === "/");
  }

  useEffect(() => {
    checkCurrent();
  });

  let containerclass = 'background-image-container';
  if(!landingPage){
    containerclass = containerclass + ' background-image-container-small';
  }

  useEffect(() => {
    const context = require.context('../../assets', false, /.*(threehands).*(png|jpe?g)$/);
    const images = context.keys().map(context);
    setImagePath(images[0]);
  },[]);

  //image
  if(imagePath){
    return (
      <div className={containerclass}>
        <img className='background-image' src={imagePath} alt="berrypicture" />
      </div>
    )
  }

  //placeholder
  return(
    <span className='background-image-placeholder'></span>
  )
}

export default BackgroundImage;