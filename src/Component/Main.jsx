import React from "react";
import "./Main.css";
import Upper from "./Upper";
import Lower from "./Lower";
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:"",
            head:"",
            date:"",
            prize:"",
            reg_fee:"",
            event_img:"",
            event_rule:[],
            guideline:[]
        }
    }
    componentDidMount(){

    }
    componentDidUpdate(){

    }
    render(){
        return(
        <div className="main">
            
        </div>)
    }
}
export default Main;