import React from "react";
import Sidebar from "../components/Sidebar";

function About() {
    return(
        <div className="row">
            <div className="col-2">
                <Sidebar content="Active"/>
            </div>
            <div className="col-10 p-2">
                <h1>About Us</h1>
                <hr/>
                <p>this is about us page</p>
            </div>
        </div>
    )
    
}
export default About;