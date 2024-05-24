import React from "react";
import {useState} from "react";

function Header() 
{
    const [textColor,setTextColor]=useState("text-dark")

    const changeToBlue=()=>
        {
            setTextColor("text-primary");
        }
    return(
        <div>
            <nav>
                <ul style={{listStyle:"none"}} className="d-flex p-2 justify-content-between">
                    <li><a href="/" className={textColor} onClick={changeToBlue}>Home</a></li>
                    <li><a href="/about" className={textColor} onClick={changeToBlue}>About</a></li>
                    <li><a href="/service" className={textColor} onClick={changeToBlue}>Services</a></li>
                    <li><a href="/project" className={textColor} onClick={changeToBlue}>Projects</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;