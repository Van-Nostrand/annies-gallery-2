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

  let paragraphs = props.data.paragraphs.map((para, i) => 
    <p 
      className={`about-paragraph-${i + 1} fade-in`} 
      key={`about-p-${i}`}>
        {para}
    </p>
  );

  let paragraph1 = <p className='paragraph1'>Microdosing crucifix sint lo-fi ennui ugh do pok pok la croix affogato. Tempor ex banjo pitchfork, neutra slow-carb biodiesel hot chicken umami poutine duis mollit disrupt. Umami cloud bread banjo, squid quis adaptogen qui coloring book mollit humblebrag edison bulb. Craft beer meggings vice irony. Do etsy mumblecore hexagon, selfies elit reprehenderit. Est flexitarian pug, enim slow-carb bespoke polaroid glossier nostrud fanny pack. Est tofu 8-bit cloud bread blog wayfarers DIY.</p>;

  let paragraph2 = <p className='paragraph2'>Man braid adipisicing chambray shabby chic. Officia id tacos four loko, forage deserunt pug letterpress do minim waistcoat. Nisi cliche hammock, thundercats ex labore irure chicharrones cornhole in cupidatat synth nulla chillwave. Listicle kickstarter raw denim, laborum magna lumbersexual cardigan activated charcoal small batch salvia. Hashtag neutra magna dolore squid, next level waistcoat velit literally normcore. Activated charcoal hell of dolore, artisan gochujang bicycle rights nulla banh mi kinfolk echo park fanny pack yuccie.</p>;

  

  if(imagePath){
    return (
      <div className="about-page-container">
        <div className="about-image-element-wrapper">
          <img src={imagePath} alt="berrypicture" />
        </div>
        {paragraph1}
        {paragraph2}
               
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
