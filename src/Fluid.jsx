import React from "react";
import { useState,useEffect } from "react";
import './Fluid.css';
function Fluid(props){
    const [rules] = useState(['Open Event', 'Maximum 3 photo per participant', 'theme will be provided', 'No sort of editing is allowed', 'Judgement will be based on creativity ,captions and overall impact', 'Other rules will be provided on spot', 'Watermark can be added.But opacity should be 30%', 'photo should not be exposed', 'Other rules will be provided on spot', 'Watermark can be added.But opacity should be 30%', 'photo should not be exposed', 'Watermark can be added.But opacity should be 30%', 'photo should not be exposed'])
    const [list, setList] = useState([]);
    useEffect(() => {
        setList([]);
        for (let i = 0; i < rules.length; i++) {
            setList((prev) => [...prev, (<li>{rules[i]}</li>)]);
        }
    }, rules)
    return(
        <div className="fluid">
            <div className="fluidsub">
                <div className="box">
                    <p>event Name</p>
                    <h6>name</h6>
                </div>
                <div className="box">
                <p>event head</p>
                    <h6>name</h6>
                </div>
                <div className="box">
                <p>date and time</p>
                    <h6>name</h6>
                </div>
                <div className="box">
                <p>registeration</p>
                    <h6>100</h6>
                </div>
                <div className="box">
                <p>prize</p>
                    <h6>1 k</h6>
                </div>

            </div>
            <div className="FluidMain">
    
            <div className="subdiv">
                <h3>rules</h3>
                <ol type="1">
                    {list}
                </ol>
            </div>
           <div className="mid">
           <h1>Event Name</h1>
           <button>register</button>
           </div>
            <div className="subdiv2">
            <h3>guidlines</h3>
            <ol type="1">
                    {list}
                </ol>
            </div>
        </div>
            
        </div>
    );
}
export default Fluid;