import React, {useState, useEffect, useRef} from "react";
import ImageElement from "./ImageElement";
import ImageWithObserver from "./ImageWithObserver";

const ImageGallery = ({artData, selectWork}) => {

  let [ imagePaths, setImagePaths ] = useState([]);

  const importAll = (r) => {
    return r.keys().map(r);
  }

  // {
  //   thumbUrl: `halo1-thumbnail.jpg`, 
  //   imgUrl: `halo1.jpg`, 
  //   date: "DATE HERE", 
  //   medium: "MEDIUM HERE", 
  //   description: "Food truck photo booth synth small batch shoreditch", 
  //   name: "halo 1"
  // },

  useEffect(() => {
    const images = importAll(require.context('../../assets', false, /thumbnail\.(png|jpe?g|svg)$/));
    setImagePaths(images);
  },[]);
 
  let imageElements = imagePaths.map((src,i) => {
    
    //as usual, in an effort to keep things flexible I've made it too complicated
    let imageData = artData.filter(art => RegExp(`${ art.name.split(" ").join("")}`.toLowerCase()).test(src) );
    // console.log("IMAGEDATA!!");
    // console.log(imageData);
    
    return(<ImageWithObserver name={imageData[0].name.split(" ").join("").toLowerCase()} source={src} key={`imageelement${i}`} />);
  });

  return(
    <div className="img-gallery-container">
      {imageElements}
    </div>
  );
}

export default ImageGallery;
