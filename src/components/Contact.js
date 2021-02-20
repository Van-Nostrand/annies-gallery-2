import React, {useState, useEffect} from "react";
import FacebookLogo from "../../assets/facebook.svg";
import InstaLogo from "../../assets/instalogo.svg";
import EmailLogo from "../../assets/emailLogo.svg";

const Contact = (props) => {
  let [ inputText, setInputText ] = useState("");

  useEffect(() => {
    props.setCurrentPage(window.location);
    console.log(window.location);
  })

  return(
    <div className="contact-page-container">
      <p>
        Reach out for more information, or to inquire about commissioned work
      </p>
      <div className="contact-logo-container">
        <img className="social-logo" src={EmailLogo} />
        <div>scoutberry@gmail.com</div>
        <img className="social-logo" src={FacebookLogo} />
        <div>@Scoutberry</div>
        <img className="social-logo" src={InstaLogo} />
        <div>@Scoutberry</div>
      </div>
      
      
    </div>
  )
}

export default Contact;
