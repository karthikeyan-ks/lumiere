import React from "react";
import './Lower.css';
function Lower(props){
    console.log(props.device.device);
    return(<div className="lower_main">
        <h1>GuideLines</h1>
        <div className="lower_sub">
            <ul type="none">
                <li><div className="guideline"><p> item 1</p></div></li>
                <li><div className="guideline"><p> item 1</p></div></li>
                <li><div className="guideline"><p> item 1</p></div></li>
            </ul>
        </div>
    </div>)
}
export default Lower;