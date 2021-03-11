import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

const Details = ({artData}) => {

  // console.log(artData);

  const {name} = useParams();
  const [ theImage, setTheImage ] = useState();
  const [ imageData, setImageData ] = useState(artData.filter(art => art.fileName === `${name.replace(' ', '-')}.jpg`)[0]);

  console.log(name);

  //regex inside require.context needs to be static. That means getting all of the files that match a predefined regex pattern, and THEN parsing through the array.
  useEffect(() => {
    // let nameregex = subject.name.split(" ").join("").toLowerCase();
    const images = require.context("../assets", false, /^(?!.*thumbnail).*(jpe?g|png).*$/);
    let results = images.keys().map(images);
    let image = results.filter(imgkey => RegExp(`.*(${name}).*`).test(imgkey));
    setTheImage(image[0]);
  },[])

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
        <img className="fullsize-img" src={theImage} />
      </div>
      <div className="info-div">
        <div className="art-title">{imageData.name}</div>
        <div className="medium">{imageData.medium}</div>
        <div className="date-div">{imageData.date}</div>
        <div className="description">{imageData.description}</div>
     
      </div>
    </div>
  );
 

};

export default Details;
