import React, {useState, useEffect} from "react";
import FacebookLogo from "../../assets/facebook.svg";
import InstaLogo from "../../assets/instalogoB&W.svg";
import EmailLogo from "../../assets/emailLogo.svg";

const Contact = (props) => {
  let [ inputText, setInputText ] = useState("");

  useEffect(() => {
    props.setCurrentPage("/contact");
  });

  return(
    <div className="contact-page-container">
      <p>
        Reach out for more information, or to inquire about commissioned work
      </p>
      <div className="contact-logo-container">
        <a href="mailto:acgallos@gmail.com">
          <img className="social-logo" src={EmailLogo} />
        </a>
        
        <a href="https://www.instagram.com/scout_berry/">
          <img className="social-logo" src={InstaLogo} />
        </a>
      </div>
      
    </div>
  )
}

export default Contact;
