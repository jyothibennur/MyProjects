import React from "react";
import Sidebar from "../components/Sidebar";

function Service() {
    return(
        <div className="row">
            <div className="col-2">
                <Sidebar/>
            </div>
            <div className="col-10">
                <h1>Services</h1>
                <hr/>
                <p>this is services page</p>
            </div>
        </div>
    )
    
}
export default Service;