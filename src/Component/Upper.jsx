import React, { useEffect, useState } from "react";
import './Upper.css';
function Upper(props) {
    const [rules, setRule] = useState(['Open Event', 'Maximum 3 photo per participant', 'theme will be provided', 'No sort of editing is allowed', 'Judgement will be based on creativity ,captions and overall impact', 'Other rules will be provided on spot', 'Watermark can be added.But opacity should be 30%', 'photo should not be exposed'])
    const [list, setList] = useState([]);
    useEffect(() => {
        setList([]);
        for (let i = 0; i < rules.length; i++) {
            setList((prev) => [...prev, (<li>{rules[i]}</li>)]);
        }
    }, rules)
    console.log(props.device.device);
    return (
        <div id="upper_main" className="upper_main">
            <div className="headTitle">
                <h2><u>Event Name</u></h2>
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
                                <h4 style={{ height: "fit-content", margin: 0, color: " #33b5e5" }}>EVENT NAME</h4>
                                <p style={{ height: "fit-content", margin: 0, color: "white" }}>name</p>
                            </div>
                            <div className="box">
                                <h4 style={{ height: "fit-content", margin: 0, color: " #33b5e5" }}>EVENT HEAD</h4>
                                <p style={{ height: "fit-content", margin: 0, color: "white" }}>name</p>
                            </div>
                            <div className="box">
                                <h4 style={{ height: "fit-content", margin: 0, color: " #33b5e5" }}>DATE AND TIME</h4>
                                <p style={{ height: "fit-content", margin: 0, color: "white" }}>name</p>
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
                        <ol type="1" >
                            {list}
                        </ol>
                    </div>
                </div>
            </div>
        </div>);
}
export default Upper;