import React, { useState } from "react";

function Inputvalues() 
{
    const [textEntered,setTextEntered]=useState("");
    const [assignValue,setAssinVlaue]=useState("");

    const textEnteredValue=(event)=>
        {
            setTextEntered(event.target.value);
        }
        const enterValue=()=>
            {
                setAssinVlaue(textEntered)
                setTextEntered("")
            }
   return(
    <div className="text-center p-5">
        <h3>Enter your Name:</h3>
        <div>
            <input placeholder="enter your name" onChange={textEnteredValue} value={textEntered}/>
            <button className="btn btn-sm btn-outline-primary m-2" onClick={enterValue}>Enter</button>
        </div>
        <div>
            <p className="mt-5">Your entered name is {assignValue}</p>
        </div>
    </div>

   ) 
}
export default Inputvalues