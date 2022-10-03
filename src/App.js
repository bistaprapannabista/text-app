import './App.css';
import Button from './components/Button.js';
import Navbar from './components/Navbar.js';
import { useState } from "react";
import Alert from './components/Alert.js';

function App() {
    const [input, setInput] = useState('');
    const[darkMode,setDarkMode] = useState(false);
    const[alertMessage,setalertMessage] = useState(null);

    if(darkMode){
      document.body.style.backgroundColor="#353935"; 
      document.body.style.color="white";
    }

    else{
      document.body.style.backgroundColor="white"; 
      document.body.style.color="black";
    }

    const upperCase = (input) =>{
      setInput(input.toUpperCase());
      setTimeout(()=>setalertMessage(null),2000);
      setalertMessage({type:"primary",msg:"Sucessfully Convert To Uppercase."});
    }

    const lowerCase = (input) =>{
      setInput(input.toLowerCase());
      setTimeout(()=>setalertMessage(null),2000);
      setalertMessage({type:"success",msg:"Sucessfully Convert To Lowercase."});
    }

    const sentenceCase = (input) =>{
      const inputArray = input.split(". ");
      let final= '';
      let str = '';
      for(let i=0;i<inputArray.length-1;i++){
          str = inputArray[i][0].toUpperCase();
          str += inputArray[i].slice(1,-1).toLowerCase();
          str += inputArray[i].slice(-1).toLowerCase();
          final +=str+'. ';
      }
      setInput(final);
      setTimeout(()=>setalertMessage(null),2000);
       setalertMessage({type:"primary",msg:"Sucessfully Convert To Sentencecase."});
    }

    const copyInput = (input) =>{
      navigator.clipboard.writeText(input); 
      setTimeout(()=>setalertMessage(null),2000);
      setalertMessage({type:"warning",msg:"Sucessfully copied to clipboard."})
    }

    const clearInput = (input) =>{
      setInput("");
      setTimeout(()=>setalertMessage(null),2000);
      setalertMessage({type:"danger",msg:"Sucessfully Clear previous text."});
    }

    return (
    <div className="App">
      <Navbar name='Text App' darkMode={darkMode} onClick={()=>{!darkMode?setDarkMode(true):setDarkMode(false)}}/>
      <Alert data={alertMessage}/>
      <div className="container">
        <div className="m-3">
          <textarea placeholder="Enter your text here!" value={input} onChange={(e)=>setInput(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <Button buttonName="blue-btn" name="Uppercase" onClick={()=>upperCase(input)}/>
        <Button buttonName="green-btn" name="Lowercase" onClick={()=>lowerCase(input)}/>
        <Button buttonName="white-btn" name="Sentencecase" onClick={()=>sentenceCase(input)}/>
        <Button buttonName="yellow-btn" name="Copy" onClick={()=>copyInput(input)}/>
        <Button buttonName="red-btn" name="Clear" onClick={()=>clearInput()}/>
        <h5>Results:</h5>
        <p>No. of Words: {input.length==0?0:input.split(" ").length}</p>
        <p>Average time to read: {input.length==0?0:(input.split(" ").length*(60/173)).toFixed(2)} sec</p>
      </div>
    </div>
    );
}

export default App;



