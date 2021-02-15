import React, { useState, useEffect } from "react";


const About = (props) => {

  let [ imagePath, setImagePath ] = useState();

  useEffect(() => {
    const context = require.context('../../assets', false, /.*(scoutberry).*(png|jpe?g)$/);
    const images = context.keys().map(context);
    setImagePath(images[0]);
  },[]);

  useEffect(() => {
    props.setCurrentPage(window.location);
  })

  let paragraphs = props.data.paragraphs.map((para, i) => <p className="about-paragraph fade-in" key={`about-p-${i}`}>{para}</p>);

  if(imagePath){
    return (
      <div className="about-page-container">
        <div>
          {paragraphs}
        </div>
        <div>THIS IS THE DANG ABOUT PAGE</div>
        <div className="about-image-element-wrapper">
          <img src={imagePath} alt="berrypicture" />
        </div>
      </div>
    )
  }

  //import image here
  return(
    <div className="about-page-container">
      <div>
        {paragraphs}
      </div>
      <div>THIS IS THE DANG ABOUT PAGE</div>
      <div className="about-image-element-wrapper">
        <span />
      </div>
    </div>
  )
}

export default About;
