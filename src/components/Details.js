import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import useGetWindowSize from "../functions/useGetWindowSize";

const Details = ({artData}) => {

  // console.log(artData);

  const {name} = useParams();
  const [ theImage, setTheImage ] = useState();
  const [ imageData, setImageData ] = useState(artData.filter(art => art.fileName === `${name.replace(' ', '-')}.jpg`)[0]);

  console.log(name);

  //regex inside require.context needs to be static. That means getting all of the files that match a predefined regex pattern, and THEN parsing through the array.
  useEffect(() => {
    // let nameregex = subject.name.split(" ").join("").toLowerCase();
    // const images = require.context("../assets", false, /^(?!.*thumbnail).*(jpe?g|png).*$/);
    const img = require(`../assets/${name}@768.jpg`);
    // let results = images.keys().map(images);
    // let image = results.filter(imgkey => RegExp(`.*(${name}).*`).test(imgkey));
    // setTheImage(image[0]);
    setTheImage(img);
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
        <a href={require(`../assets/${name}.jpg`)}><img className="fullsize-img" src={theImage} /></a>
      </div>
      <div className="info-div">
        <div className="art-title">{imageData.name}</div>
        <div className="medium">{imageData.medium}</div>
        {/* <div className="date-div">{imageData.date}</div> */}
        {/* <div className="description">{imageData.description}</div> */}
        <a href={`mailto:acgallos@gmail.com?subject=Inquiry: ${imageData.name}`}>email for information on pricing and prints</a>
     
      </div>
    </div>
  );
 

};

export default Details;
