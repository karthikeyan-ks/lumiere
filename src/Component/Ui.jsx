import React from "react";
import { useState, useEffect } from "react";
import './Ui.css';
function Ui(props) {
    // eslint-disable-next-line
    const [rules,setRules] = useState(['Open Event', 'Maximum 3 photo per participant', 'theme will be provided', 'No sort of editing is allowed', 'Judgement will be based on creativity ,captions and overall impact', 'Other rules will be provided on spot', 'Watermark can be added.But opacity should be 30%', 'photo should not be exposed'])
    const [list, setList] = useState([]);
    // eslint-disable-next-line
    const [guidelines,setGuidelines] = useState(['Open Event', 'Maximum 3 photo per participant', 'theme will be provided', 'No sort of editing is allowed', 'Judgement will be based on creativity ,captions and overall impact', 'Other rules will be provided on spot', 'Watermark can be added.But opacity should be 30%', 'photo should not be exposed'])
    const [glist, setgList] = useState([]);
    // eslint-disable-next-line
    // eslint-disable-next-line
    const [description,setDescription]=useState("description about this event page");
    // eslint-disable-next-line
    const [img,setImg]=useState("https://static.vecteezy.com/system/resources/previews/003/003/622/large_2x/cricket-banner-championship-background-poster-template-flyer-banner-free-vector.jpg");
    // eslint-disable-next-line
    const [EventName,setEventName]=useState("County Cricketrferferf");
    // eslint-disable-next-line
    const [EventHead,setEventHead]=useState("namfeferfe rfrefree");
    // eslint-disable-next-line
    const [date,setDate]=useState("11/04/2023");
    
    useEffect(() => {
        setList([]);
        for (let i = 0; i < rules.length; i++) {
            setList((prev) => [...prev, (<div key={"div"+i} className="mini"><li key={"li"+i}>{rules[i]}</li></div>)]);
        }
        // eslint-disable-next-line
    }, rules)
    // eslint-disable-next-line
    useEffect(()=>{
        setgList([]);
        for(let i=0;i<guidelines.length;i++){
            setgList(prev=>[...prev,(<div key={"div"+i} className="mini"><li key={"li"+i}>{rules[i]}</li></div>)]);
        }
    })
    return (<div className="main">
        <div id="h1" className="h1">
            <h1>County Cricket</h1>
        </div>
        <div className="container">
            <img onLoad={(eve)=>{
                console.log("triggered")
                var red = document.getElementById('h1');
                red.style.backgroundImage = 'linear-gradient(to bottom, rgba(20,30,47,.5),rgba(0,0,0,1)),url("'+img+'")';
            }}
             src={img} alt={img}></img>
            <div className="descbox">
                <div className="About">
                    <h2>About</h2>
                    <div className="line">
                        uuvuyuyvu
                    </div>
                    <p>{description}</p>
                    <div className="bottom">
                        <button>register</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="descbox">
                <div className="About">
                    <h2>Event details</h2>
                    <div className="line">
                        uuvuyuyvu
                    </div>
                    
                    <div className="eventdetail">
                    <div style={{margin:"1%",padding:"1%",fontSize:"4vw" ,width:"fit-content",maxWidth:"30vw",border:"solid white 2px"}}>
                            <h4>Event Name</h4>
                            <p>{EventName}</p>
                    </div>
                        <div style={{margin:"1%",padding:"1%",fontSize:"4vw" ,width:"fit-content",maxWidth:"30vw",border:"solid white 2px"}}>
                            <h4>Event Head</h4>
                            <p>{EventHead}</p>
                        </div>
                        <div style={{margin:"1%",padding:"1%",fontSize:"4vw" ,width:"fit-content",maxWidth:"30vw",border:"solid white 2px"}}>
                            <h4>date and time</h4>
                            <p>{date}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="descbox">
                <div className="About">
                    <h2>rules</h2>
                    <div className="line">
                        line
                    </div>
                    <ol>
                        {list}
                    </ol>
                </div>
            </div>
            <img src={img} alt={img}></img>
        </div>
        <div className="container">
            <div className="descbox">
                <div className="About">
                    <h2>Guidelines</h2>
                    <div className="line">
                        uuvuyuyvu
                    </div>
                    <ol>
                        {glist}
                    </ol>
                </div>
            </div>
        </div>
        <footer>
            <div>

            </div>
        </footer>
    </div>)
}
export default Ui;
//background-image: url("https://png.pngtree.com/background/20210714/original/pngtree-futuristic-shape-abstract-background-chemistry-technology-concept-for-website-picture-image_1250295.jpg");
//#0c1559