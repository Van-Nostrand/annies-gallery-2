import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import useGetWindowSize from "../functions/useGetWindowSize";
import EmailLogo from "../../assets/emailLogo.svg";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";

import cloud_name from "../config/config";

const Details = ({artData}) => {

  const {name} = useParams();
  const [ theImage, setTheImage ] = useState(artData.filter(art => art.name.toLowerCase().replace(/( )/gi, "+") == name)[0]);
  

  // if the image isn't imported yet, load placeholder
  // placeholder needs work.. 
  if(!theImage){
    return(
      <div>DETAILS SCREEN</div>
    )
  }

  return(
    <div className="detail-page-container">
      <div className="image-div">
        <CloudinaryContext cloudName={cloud_name.cloud_name} >
          <Image publicId={theImage.publicId}>

          </Image>
        </CloudinaryContext>
        
      </div>
      <div className="info-div">
        <div className="art-title">{theImage.name}</div>
        <div className="medium">{theImage.medium}</div>
        
        <div className="size">{theImage.size}</div>
        <a href={`mailto:acgallos@gmail.com?subject=Inquiry: ${theImage.name}`}>
          <img src={EmailLogo} />
            pricing and prints
        </a>
     
      </div>
    </div>
  );
 

};

export default Details;
