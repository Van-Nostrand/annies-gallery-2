import React from 'react';
import Hand from "./hand-cutout-edit2.png"

const HandCutout = (props) => {
  let propStyle = {
    transform: props.style.transform,
    pointerEvents: "none"
  }
  let imgElmStyle = {
    width: "60px",
    zIndex: "2",
    pointerEvents: "none"
  }

  return (
    <div id="hand-div" className="hand-container" style={propStyle}>
      <img src={Hand} alt="logo" style={imgElmStyle} id="hand-icon" className="hand-img" />
    </div>
  )
}

export default HandCutout;
