import Button from './Button.js';

import { useState } from "react";

export default function Textform(props){
    const [input, setInput] = useState('');

    const upperCase = (input) =>{
      setInput(input.toUpperCase());
      setTimeout(()=>props.setalertMessage(null),3000);
      props.setalertMessage({type:"primary",msg:"Sucessfully Convert To Uppercase."});
    }

    const lowerCase = (input) =>{
      setInput(input.toLowerCase());
      setTimeout(()=>props.setalertMessage(null),3000);
      props.setalertMessage({type:"success",msg:"Sucessfully Convert To Lowercase."});
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
      setTimeout(()=>props.setalertMessage(null),3000);
       props.setalertMessage({type:"primary",msg:"Sucessfully Convert To Sentencecase."});
    }

    const copyInput = (input) =>{
      navigator.clipboard.writeText(input); 
      setTimeout(()=>props.setalertMessage(null),3000);
      props.setalertMessage({type:"warning",msg:"Sucessfully copied to clipboard."})
    }

    const clearInput = (input) =>{
      setInput("");
      setTimeout(()=>props.setalertMessage(null),3000);
      props.setalertMessage({type:"danger",msg:"Sucessfully Clear previous text."});
    }

    return (
      <>
        <div className="m-3">
          <textarea placeholder="Enter your text here!" value={input} onChange={(e)=>setInput(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <Button buttonName="blue-btn" name="Uppercase" onClick={()=>upperCase(input)}/>
        <Button buttonName="green-btn" name="Lowercase" onClick={()=>lowerCase(input)}/>
        <Button buttonName="white-btn" name="Sentencecase" onClick={()=>sentenceCase(input)}/>
        <Button buttonName="yellow-btn" name="Copy" onClick={()=>copyInput(input)}/>
        <Button buttonName="red-btn" name="Clear" onClick={()=>clearInput()}/>
        <h5>Results:</h5>
        <p>No. of Words: {input.length===0?0:input.split(" ").length}</p>
        <p>Average time to read: {input.length===0?0:(input.split(" ").length*(60/173)).toFixed(2)} sec</p>
      </>
    );
}

