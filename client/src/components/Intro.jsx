import React, {Component} from "react";
import Image from "./images/gifs.gif";

class Intro extends Component {
    render(){
        return(
            <div id="intro">
            <img className="intoImg" src={Image}  alt="EduardoReta" />
            <div className="introDescription">
            <div id="h_1" className="introPara"><span>Hi, I'm Eduardo.</span></div>
            <div id="h_2" className="introPara"><span>A Full Stack web developer in the triangle area.</span></div>
            <div id="h_3" className="introPara"><span>Ready to bring your website and ideas online.</span></div>
            </div>
            </div> 
        )
    }
};

export default Intro;