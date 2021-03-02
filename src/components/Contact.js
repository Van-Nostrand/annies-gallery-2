import React, {useState, useEffect} from "react";
import FacebookLogo from "../../assets/facebook.svg";
import InstaLogo from "../../assets/instalogo.svg";
import EmailLogo from "../../assets/emailLogo.svg";

const Contact = (props) => {
  let [ inputText, setInputText ] = useState("");

  useEffect(() => {
    props.setCurrentPage("/contact");
  
  })

  return(
    <div className="contact-page-container">
      <p>
        Reach out for more information, or to inquire about commissioned work
      </p>
      <div className="contact-logo-container">
        <a href="#">
          <img className="social-logo" src={EmailLogo} />
        </a>
        
        <a href="#">
          <img className="social-logo" src={FacebookLogo} />
        </a>
        
        <a href="#">
          <img className="social-logo" src={InstaLogo} />
        </a>
      </div>
      
    </div>
  )
}

export default Contact;
