import React, {useState, useEffect, useRef} from "react";
import {useIntersectionObserver} from "../functions/useIntersectionObserver";

const ImageWithObserver = (props) => {

  const [ showImage, setShowImage ] = useState(false);
  const placeholderRef = useRef(null);

  useEffect(() => {
    useIntersectionObserver(placeholderRef.current, setShowImage);
  },[]);

  if(showImage){
    return(
      <div className="img-div" onClick={() => console.log("clicked div")} >
        <div className="img-hover-text">more info</div>
        <div className="img-hover-filter"></div>
        <img className="img-thumb" src={props.source} alt="artwork" />
      </div>
    )
  }

  return(
    <div ref={placeholderRef} className="img-div" onClick={() => console.log("clicked div")} >
      <div className="img-hover-text">more info</div>
      <div className="img-hover-filter"></div>
      <span className="img-thumb" ></span>
    </div>
  )
}

export default ImageWithObserver;