import React from "react";
import './Upper.css';
function Upper(props){
    console.log(props.device.device);
    return(
    <div id="upper_main" className="upper_main">
        <div className="headTitle">
            <h2>Event Name</h2>
        </div>
        <div id="upper_sub" className="upper_sub">
            <div className="subdiv">
                <div id="upper_first" className="upper_first">

                    <img src="https://cdn.stumagz.com/images/56aa0de030854stryimg" alt="https://cdn.stumagz.com/images/56aa0de030854stryimg"></img>
                    <button>register</button>
                </div>
                <div id="upper_second" className="upper_second">
                    <div className="container">
                    <div className="box">
                        <h4 style={{height:"fit-content",margin:0,color:" #33b5e5"}}>EVENT NAME</h4>
                        <p style={{height:"fit-content",margin:0,color:"white"}}>name</p>
                    </div>
                    <div className="box">
                        <h4 style={{height:"fit-content",margin:0,color:" #33b5e5"}}>EVENT HEAD</h4>
                        <p style={{height:"fit-content",margin:0,color:"white"}}>name</p>
                    </div>
                    <div className="box">
                        <h4 style={{height:"fit-content",margin:0,color:" #33b5e5"}}>DATE AND TIME</h4>
                        <p style={{height:"fit-content",margin:0,color:"white"}}>name</p>
                    </div>
                    </div>
                    <div className="container1">
                        <div className="prize">
                            <div>PRIZE</div>
                            <div><h1>1 K</h1></div>
                        </div>
                        <div className="registeration">
                            <div>REGISTERATION FEE</div>
                            <div><h3>100</h3></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="upper_thrid" className="upper_thrid">
                <div className="rulebox">
                    <h3>RULES</h3>
                    <ol >
                        <li>bbfewi</li>
                        <li>bbfewi</li>
                        <li>bbfewi</li>
                        <li>bbfewi</li>
                        <li>bbfewi</li>
                        <li>bbfewi</li>
                        <li>bbfewi</li>
                        <li>bbfewi</li>
                        <li>bbfewi</li>
                        <li>bbfewi</li>
                        <li>bbfewi</li>
                        <li>bbfewi</li>
                        <li>bbfewi</li>
                        <li>bbfewi</li>
                        <li>bbfewi</li>
                        <li>bbfewi</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>);
}
export default Upper;