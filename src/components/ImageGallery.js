import React from "react";

const ImageGallery = (props) => {

    // this.state = {
    //   description: "Viral cred reprehenderit pop-up, deep v non shaman seitan salvia ipsum man braid laboris street art magna portland",
    //   date: "December 31 1999",
    //   title: "Title here",
    //   artMedium: "art medium here",
    //   colors: [
    //     "rgba(228, 199, 79, 1)",
    //     "rgba(82, 199, 71, 1)",
    //     "rgba(226, 94, 19, 1)",
    //     "rgba(181, 70, 212, 1)",
    //     "rgba(64, 72, 233, 1)",
    //     "rgba(146, 173, 106, 1)",
    //     "rgba(254, 42, 42, 1)",
    //     "rgba(8, 104, 119, 1)",
    //     "rgba(66, 158, 0, 1)",
    //     "rgba(76, 9, 193, 1)"
    //   ]
    // }


  // handleMouseClick(e){
  //   console.log(e.target);
  // }

    // let images = this.props.artData.map((image, i) => {
    //   return (
    //     <ImageElement
    //       key={`image-elem-${i}`}
    //       id={image.name}
    //       image={image.thumbUrl}
    //       altColor={this.state.colors[Math.floor(Math.random()*this.state.colors.length)]}
    //       onMouseOver={this.handleMouseOver}
    //       onMouseOut={this.handleMouseOut}
    //       onClick={() => this.props.selectWork(`details:${image.name}`)}
    //     />
    //   )
    // });
  return(
    <div className="img-gallery-container">
      IMAGE GALLLERY!!!
    </div>
  );
}

const ImageElement = (props) => {
  return(
    <div className="img-div" onMouseOver={props.onMouseOver}
    onMouseOut={props.onMouseOut} onClick={props.onClick}>
      <span className="img-hover-text">select image</span>
      <img src={props.image} className="img-thumb" />
    </div>
  )
}

export default ImageGallery;
