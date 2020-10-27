import React from "react";


const About = (props) => {
  let paragraphs = props.data.paragraphs.map((para, i) => <p className="about-paragraph fade-in" key={`about-p-${i}`}>{para}</p>);
  return(
    <div className="about-page-div">
      <div>
        {paragraphs}
      </div>
      <div>
        <img src={props.data.aboutPhoto}></img>
      </div>
    </div>
  )
}

export default About;
