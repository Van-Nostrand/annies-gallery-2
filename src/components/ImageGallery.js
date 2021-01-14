import React, {useState, useEffect, useRef} from "react";
// import {images} from "../functions/images";

// super helpful!! vvv
// https://stackoverflow.com/questions/53762640/how-to-import-all-images-from-a-folder-in-reactjs

const ImageGallery = (props) => {
  let [ imageData, setImageData ] = useState([]);
  let [ windowSize, setWindowSize ] = useState(window.innerWidth);

  // useEffect(() => {
  //   setWindowSize(window.innerWidth);
  // },[])

  console.log(windowSize);

  const importAll = (r) => {
    return r.keys().map(r);
  }

  const images = importAll(require.context('../../assets', false, /thumbnail\.(png|jpe?g|svg)$/));

  let imageElements = images.map((src,i) => {
    return(
      <ImageElement source={src} key={`imageelement${i}`} />
    );
  });

  return(
    <div className="img-gallery-container">
      {imageElements}
    </div>
  );
}

const ImageElement = (props) => {
  return(
    <div className="img-div" onClick={() => console.log("clicked div")} >
      <div className="img-hover-text">more info</div>
      <div className="img-hover-filter"></div>
      <img src={props.source} className="img-thumb" />
    </div>
  )
}

export default ImageGallery;
