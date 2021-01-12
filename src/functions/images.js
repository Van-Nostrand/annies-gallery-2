import generateImage from "./generateImage";
// import getImageNames from "./getImageNames";


// const images = document.querySelector('#images');
// const imagesNames = getImageNames();
export const images = (refs, imageNames) => {

  for(let i = 0; i < imageNames.length; i++){
    generateImage(refs[i], `${imageNames[i]}.jpg`);
  }
  // imageNames.forEach(name => generateImage(images, name));
}


// generate <img> element
// lazy-load each image and set its src attribute
// append <img> to #images container
// imageNames.forEach(name => generateImage(images, name));

