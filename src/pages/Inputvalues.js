import React, { useState } from "react";

function Inputvalues() 
{
    const [textEntered,setTextEntered]=useState("");

    const textEnteredValue=(event)=>
        {
            setTextEntered(event.target.value);
        }
   return(
    <div className="text-center p-5">
        <h3>Enter your Name:</h3>
        <div>
            <input placeholder="enter your name" onChange={textEnteredValue}/>
        </div>
        <div>
            <p className="mt-5">Your entered name is {textEntered}</p>
        </div>
    </div>

   ) 
}
export default Inputvalues