import React, {useState, useEffect} from "react";
import FacebookLogo from "../../assets/facebook.svg";
import InstaLogo from "../../assets/instalogo.svg";
import EmailLogo from "../../assets/emailLogo.svg";

const Contact = (props) => {
  let [ inputText, setInputText ] = useState("");

  return(
    <div className="contact-page-container">
      <p>Contact Page</p>
      <img className="social-logo" src={FacebookLogo} />
      <img className="social-logo" src={InstaLogo} />
      <img className="social-logo" src={EmailLogo} />
    </div>
  )
}

export default Contact;
