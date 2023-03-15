import React from "react";
import './Event.css';
function Event(props){
    return(
    <div className="Eventmain">
        <div className="sub">
            <div className="firstdiv">
                <div style={{"boxShadow":"box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"}} className="container">
                    <div className="first">
                        <div className="imgheader">Title</div>
                    </div>
                    <div className="first">
                        <img src="https://cdn.stumagz.com/images/56aa0de030854stryimg" alt="https://cdn.stumagz.com/images/56aa0de030854stryimg"></img>
                    </div>
                    <div className="first">
                        <button>
                            register
                        </button>
                    </div>
                </div>
                <div className="container">
                    <div className="box1">
                        <h3>Event head</h3>
                        <p>name</p>
                    </div>
                    <div className="box1">
                    <h3>date and time</h3>
                        <p>name</p>
                    </div>
                    <div className="con">
                        <div className="pri">
                            <p>prize</p>
                            <p> 1 k</p>
                        </div>
                        <div className="reg">
                            <p>registeration</p>
                            <p>100</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="firstdiv">
                <div className="rule">
                    <h3>RULES</h3>
                    <ol type="1" >
                        {list}
                    </ol>
                </div>
            </div>
        </div>
        <div className="sub1">
            <div className="sub2con">
                <h3>GUIDELINES</h3>
                <ol type="1">
                    {list}
                </ol>
            </div>
        </div>
    </div>)
}
export default Event;