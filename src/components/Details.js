import React, {useState, useEffect} from "react";

const Details = ({subject, addToCart}) => {

  //not sure I'll use these
  const [ quantity, setQuantity ] = useState(0);
  const handleDecrement = () => { setQuantity(quantity - 1)};
  const handleIncrement = () => { setQuantity(quantity + 1)};
  const [ theImage, setTheImage ] = useState();

  //regex inside require.context needs to be static. That means getting all of the files that match a predefined regex pattern, and THEN parsing through the array.
  useEffect(() => {
    let nameregex = subject.name.split(" ").join("").toLowerCase();
    
    const images = require.context("../../assets", false, /^(?!.*thumbnail).*(jpe?g|png).*$/);
    let results = images.keys().map(images);
    let image = results.filter(imgkey => RegExp(`.*(${nameregex}).*`).test(imgkey));
    setTheImage(image[0]);
  },[]  )
  console.log("theimage")
  console.log(theImage);


  if(!theImage){
    return(
      <div>DETAILS SCREEN</div>
    )
  }


  return(
    <div className="detail-container">
      <div className="image-div">
        <img className="fullsize-img" src={theImage} />
      </div>
      <div className="info-div">
        <div className="art-title">{subject.name}</div>
        <div className="medium">{subject.medium}</div>
        <div className="date-div">{subject.date}</div>
        <div className="description">{subject.description}</div>
     
      </div>
    </div>
  );
  // return(
  //   <div id="detail-container">
  //     <div id="image-div">
  //       <img id="fullsize-img" src={subject.imgUrl} />
  //     </div>
  //     <div id="info-div">
  //       <div id="art-title">{subject.name}</div>
  //       <div id="medium">{subject.medium}</div>
  //       <div id="date-div">{subject.date}</div>
  //       <div id="description">{subject.description}</div>
  //       <div id="add-cart-form">
  //         <button id="decrement-btn" onClick={handleDecrement}>-</button>
  //         <span id="quantity-span">{quantity}</span>
  //         <button id="increment-btn" onClick={handleIncrement}>+</button>
  //         <button id="purchase" >add to cart</button>
  //       </div>
  //     </div>
  //   </div>
  // );

};

export default Details;
