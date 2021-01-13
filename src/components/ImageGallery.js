import React, {useState, useEffect, useRef} from "react";
import {images} from "../functions/images";
import halo1 from "../../assets/halo1.jpg";
import halo2 from "../../assets/halo2.jpg";
import blindfolded from "../../assets/blindfolded.jpg";
import jayden from "../../assets/jayden.jpg";
import martinandi from "../../assets/martinandi.jpg";
import uncovered from "../../assets/uncovered.jpg";
import vortex from "../../assets/vortex.jpg";

// super helpful!! vvv
// https://stackoverflow.com/questions/53762640/how-to-import-all-images-from-a-folder-in-reactjs

const imageNames = [
  "halo1", "halo2", "blindfolded", "jayden", "martinandi", "uncovered", "vortex"
];


const ImageGallery = (props) => {
  let [ imageData, setImageData ] = useState([]);

  const importAll = (r) => {
    return r.keys().map(r);
  }

  const images = importAll(require.context('../../assets', false, /\.(png|jpe?g|svg)$/));
  console.log(images);

  return(
    <div className="img-gallery-container">
      <img src={halo1} />
      <img src={halo2} />
      <img src={blindfolded} />
      <img src={jayden} />
      <img src={martinandi} />
      <img src={uncovered} />
      <img src={vortex} />
    </div>
  );
}

const ImageElement = (props) => {
  return(
    <div 
      className="img-div" >

      <span className="img-hover-text">select image</span>
      <img src={props.source} className="img-thumb" />
    </div>
  )
}

export default ImageGallery;
