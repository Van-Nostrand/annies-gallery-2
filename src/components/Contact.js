import React, {useState, useEffect} from "react";

const Contact = (props) => {
  let [ inputText, setInputText ] = useState("");

  const handleClick = (e) => {
    console.log(e.target);
  }

  return(
    <div>
      <p>Contact Page</p>
      <div>facbook</div>
      <div>insta</div>
      <div>email</div>
      
    </div>
  )
}

export default Contact;
