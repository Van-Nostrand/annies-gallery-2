import React, {useState, useEffect} from "react";

const Contact = (props) => {
  let [ inputText, setInputText ] = useState("");

  const handleClick = (e) => {
    console.log(e.target);
  }

  return(
    <div>
      <p>Contact Page</p>
      <input 
        type="text" 
        value={inputText} 
        onChange={setInputText} />

      <button onClick={handleClick} >CLICK</button>
    </div>
  )
}

export default Contact;
