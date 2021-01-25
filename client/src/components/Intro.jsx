import React, {Component, useEffect} from "react";
import Image from "./images/gifs.gif";

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            h_1 : "hidden",
            h_2 : "hidden",
            h_3 : "hidden"
        };
    }

componentDidMount() {
    this.pageLoad = [setInterval(
        () => {
            this.setState({h_1: "visible"})
        }, 1500), 
        setInterval(() => {
            this.setState({h_2: "visible"})
        }, 2500),
        setInterval(()=> {
            this.setState({h_3: "visible"})
        },3500)
    ]
                
        return () => clearInterval(this.pageLoad)

}

componentWillUnmount() {
    clearInterval(this.pageLoad);
}

    render(){
        return(
            <div id="intro">
            <img className="intoImg" src={Image}  alt="EduardoReta" />
            <div className="introDescription">
            <div id="h_1" style={{visibility: this.state.h_1}} className="introPara" ><span>Hi, I'm Eduardo.</span></div>
            <div id="h_2" style={{visibility: this.state.h_2}} className="introPara"><span>A Full Stack web developer in the triangle area.</span></div>
            <div id="h_3" style={{visibility: this.state.h_3}} className="introPara"><span>Ready to bring your website and ideas online.</span></div>
            </div>
            </div> 
        )
    }
};

export default Intro;