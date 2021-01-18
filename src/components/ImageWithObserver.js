import React, {useState, useEffect, useRef} from "react";
import {useIntersectionObserver} from "../functions/useIntersectionObserver";

/**
 * loads a placeholder until the image is ready to load
 * @param {source} props path/name of image file
 */
const ImageWithObserver = ({source, selectWork, name}) => {

  const [ showImage, setShowImage ] = useState(false);
  const placeholderRef = useRef(null);

  useEffect(() => {
    useIntersectionObserver(placeholderRef.current, setShowImage);
  },[]);

  // console.log("imagewithobserver!!");

  if(showImage){
    return(
      <div className="img-div" onClick={() => selectWork(`details-${name}`)} >
        <div className="img-hover-text">more info</div>
        <div className="img-hover-filter"></div>
        <img className="img-thumb" src={source} alt="artwork" />
      </div>
    )
  }

  return(
    <div ref={placeholderRef} className="img-div" onClick={() => selectWork(`details-${name}`)} >
      <div className="img-hover-text">more info</div>
      <div className="img-hover-filter"></div>
      <span className="img-thumb" ></span>
    </div>
  )
}

export default ImageWithObserver;