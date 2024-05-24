import React from "react";
import Sidebar from "../components/Sidebar";

function Project() {
    return(
        <div className="row">
            <div className="col-2">
                <Sidebar/>
            </div>
            <div className="col-10">
                <h1>project</h1>
                <hr/>
                <p>this is project page</p>
            </div>
        </div>
    )
    
}
export default Project;