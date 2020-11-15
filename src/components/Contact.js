import React, {useState, useEffect} from "react";
import axios from "axios";

const Contact = (props) => {
  let [ inputText, setInputText ] = useState("");
  let httpRequest;

  const handleChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  }

  const handleClick = (e) => {
    sendData()
  }

  const sendData = (data) => {
    // httpRequest = new XMLHttpRequest();
    // httpRequest.onreadystatechange = alertContents;
    // httpRequest.open("POST","http://localhost:8081/data");
    // // httpRequest.setRequestHeader("Content-Type", "application/json");
    
    // httpRequest.send('a string!');
    let config = {
      method: 'post',
      url: "http://localhost:8081/data",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      data: {something: "information!"}
    }
    axios(config)
    .then(function(response){
      console.log(JSON.stringify(response.data));
    })
    .catch(function(error){
      console.log(error);
    });
  }

  const alertContents = () => {
    if(httpRequest.readyState === XMLHttpRequest.DONE){
      if(httpRequest.status === 200){
        alert(httpRequest.responseText);
      }
      else {
        alert('there was a problem...');
      }
    }
  }

  return(
    <div>
      <p>Contact Page</p>
      <input 
        type="text" 
        value={inputText} 
        onChange={handleChange} />

      <button onClick={handleClick} >CLICK</button>
    </div>
  )
}

export default Contact;
