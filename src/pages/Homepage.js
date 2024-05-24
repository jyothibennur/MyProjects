import React from "react";
import Sidebar from "../components/Sidebar";
import girlimg from '../images/girl-6920625_640.jpg'

function Home() {
    return(
        <div className="row">
            <div className="col-2">
                <Sidebar/>
            </div>
            <div className="col-10">
                <h1>Homepage</h1>
                <hr/>
                <div>
                <img src={girlimg} height={200} width={300}></img>

                </div>
                <p>this is home page</p>
            </div>
        </div>
    )
    
}
export default Home;