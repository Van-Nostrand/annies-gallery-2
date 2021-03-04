import React, {useState, useEffect, useRef} from "react";
import ImageWithObserver from "./ImageWithObserver";

const ImageGallery = ({artData, selectWork, setCurrentPage}) => {

  let [ imagePaths, setImagePaths ] = useState([]);

  const importAll = (r) => {
    return r.keys().map(r);
  }

  useEffect(() => {
    const images = importAll(require.context('../../assets', false, /thumbnail\.(png|jpe?g|svg)$/));
    setImagePaths(images);
  },[]);

  useEffect(() => {
    setCurrentPage("/gallery");
  })
 
  // in an effort to keep things flexible I've made it too complicated
  let imageElements = imagePaths.map((src,i) => {
    
    let imageData = artData.filter(art => RegExp(`${ art.name.split(" ").join("")}`.toLowerCase()).test(src) );
    
    return(<ImageWithObserver name={imageData[0].name.split(" ").join("").toLowerCase()} source={src} key={`imageelement${i}`} />);
  });

  return(
    <div className="gallery-page-container">
      {imageElements}
    </div>
  );
}

export default ImageGallery;
