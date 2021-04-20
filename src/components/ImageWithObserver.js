import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import {useIntersectionObserver} from "../functions/useIntersectionObserver";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import {cloudinaryConfig} from "../config/cloudinaryConfig";

/**
 * loads a placeholder until the image is ready to load
 * @param {source} props path/name of image file
 */
const ImageWithObserver = ({imageData, width}) => {

  const [ showImage, setShowImage ] = useState(false);
  const placeholderRef = useRef(null);

  useEffect(() => {
    useIntersectionObserver(placeholderRef.current, setShowImage);
  },[]);

  /*
  I'll have to address this eventually. I made the Link element the clickable thing but it used to be the parent div. Now ONLY the text is clickable, but I want the whole image to be clickable. 
  */
  if(showImage){
    return(
      <Link className="thumbnail" to={`/details/${imageData.name.toLowerCase().replace(/( )/gi, "+")}`} >
        <div className="thumbnail-hover-text" >more info</div>
        <CloudinaryContext className="cloudinary-context" cloudName={cloudinaryConfig.cloud_name}>
          <Image publicId={imageData.publicId} >
            <Transformation width={width} crop="scale" />
          </Image>
        </CloudinaryContext>
      </Link>
    )
  }

  return(
    <div ref={placeholderRef} className="thumbnail-div"  >
      <div className="thumbnail-hover-text">more info</div>
      <div className="thumbnail-hover-filter"></div>
      <span className="thumbnail-placeholder" ></span>
    </div>
  )
}

export default ImageWithObserver;