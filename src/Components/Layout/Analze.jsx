import React, { useState } from 'react'
import { Textarea } from "/src/components/ui/textarea"
import Conatiner from '../Conatiner'

import { Button } from "/src/Components/ui/button"
const Analze = () => {
    const[text, settext]=useState("")
    const handelText=(e)=>{
      settext(e.target.value)
      
    };
    const handelUpClick=()=>{
 const newtext=text.toUpperCase();
 settext(newtext);
    }

    const handelLowClick=()=>{
 const newtext=text.toLowerCase();
 settext(newtext);
    }
const handleCapitalizeClick = () => {
  const newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  settext(newText);
};

     const handelClearClick=()=>{

 settext("");
    }
  return (
   <>
  <div className="py-[120px] bg-gray-200">
    <Conatiner>
      <h1 className='text-3xl text-black font-bold py-7.5'>Enter the  text to analize below </h1>
<Textarea className={"max-h-[200px] min-h-[200px] overflow-y-scroll "} value={text} onChange={handelText} placeholder="Type your message here." />
<div className="flex flex-wrap items-center gap-x-3 my-5 md:flex-row">
      <Button className={"bg-blue-500 text-white font-semibold cursor-pointer"} onClick={handelUpClick}>Convert to Uppercase</Button>

      <Button className={"bg-blue-500 text-white font-semibold cursor-pointer"} onClick={handelLowClick}>
        Convert to Lowercase
      </Button>
      <Button className={"bg-blue-500 text-white font-semibold cursor-pointer"} onClick={handleCapitalizeClick}>
        Convert to Capitalize
      </Button>
<Button className={"bg-blue-500 text-white font-semibold cursor-pointer"} onClick={handelClearClick}>
        Clear
      </Button>
    
    </div>
      <h2 className='text-2xl text-black font-bold py-5.5' >Your Text Summary : </h2>
      <p>{text.split(" ").length-1} Words and {text.length} Letters</p>
      <p>{(text.split(" ").length-1)*0.005} minutes need to read the text for an average person</p>
      <h3 className='text-2xl text-black font-bold py-5.5'>Preview:</h3>
      <p>{text} </p>

    </Conatiner>
  </div>
  </>
  )
}

export default Analze