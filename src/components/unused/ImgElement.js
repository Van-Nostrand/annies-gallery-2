import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ImgElement = (props) => {

  let [ imagePath, setImagePath ] = useState();
  let [ landingPage, setLandingPage ] = useState();
  let current = useLocation();

  const checkCurrent = () => {
    setLandingPage(current.pathname === "/");
  }

  useEffect(() => {
    checkCurrent();
  });

  useEffect(() => {
    const context = require.context('../../assets', false, /.*(threehands).*(png|jpe?g)$/);
    const images = context.keys().map(context);
    setImagePath(images[0]);
  },[]);

  if(imagePath){
    return (
      <img 
        className={landingPage ? 'b-img-element' : 'b-img-element small-bg' }
        src={imagePath} 
        alt="berrypicture" />
    )
  }

  //import image here
  return(
    <span className='b-img-ph'></span>
  )
}

export default ImgElement;