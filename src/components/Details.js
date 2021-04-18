import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// import useGetWindowSize from "../functions/useGetWindowSize";
import EmailLogo from "../../assets/emailLogo.svg";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";

import cloud_name from "../config/config";

const Details = ({artData}) => {

  const { name } = useParams();
  const [ theImage, setTheImage ] = useState(artData.filter(art => art.name.toLowerCase().replace(/( )/gi, "+") == name)[0]);
  

  // if the image isn't imported yet, load placeholder
  // placeholder needs work.. 
  if(!theImage){
    return(
      <div>DETAILS SCREEN</div>
    )
  }


  let imageHeight = Math.trunc(window.innerHeight - (window.innerHeight * 0.15));
  
console.log(imageHeight)

  return(
    <div className="detail-page-container">
      <div className="image-div">
        <a href={theImage.url}>
          <CloudinaryContext cloudName={cloud_name.cloud_name} >
            <Image publicId={theImage.publicId}>
              <Transformation height={imageHeight} crop="scale" />
            </Image>
          </CloudinaryContext>
        </a>
          
      </div>
      <div className="info-div">
        <div className="art-title">{theImage.name}</div>
        <div className="medium">{theImage.medium}</div>
        
        <div className="size">{theImage.size}</div>
        <a href={`mailto:acgallos@gmail.com?subject=Inquiry: ${theImage.name}`}>
          <img src={EmailLogo} />
            pricing and prints
        </a>
        <div>click image for full resolution</div>
     
      </div>
    </div>
  );
};

export default Details;
