import React, {useState, useEffect, useRef} from "react";
import ImageWithObserver from "./ImageWithObserver";

const ImageGallery = ({artData, selectWork, setCurrentPage}) => {

  let [ imagePaths, setImagePaths ] = useState([]);

  const separator = '@320';

  const importAll = (r) => {
    return r.keys().map(r);
  }

  useEffect(() => {
    // const images = importAll(require.context('../../assets', false, /thumbnail\.(png|jpe?g|svg)$/));
    const images = importAll(require.context('../assets/', false, /(@320.jpg)$/));
    
    setImagePaths(images);
  },[]);

  useEffect(() => {
    setCurrentPage("/gallery");
  })

  let imageElements = artData.map((artwork, i) => {
    let thisArt = imagePaths.filter(path => RegExp(`(${artwork.fileName.split('.').join(separator + '.')})`).test(path));

    return <ImageWithObserver 
              name={artwork.name}
              source={thisArt[0]}
              key={`image-element-${i}`} />

  });  

  return(
    <div className="gallery-page-container">
      {imageElements}
    </div>
  );
}

export default ImageGallery;
