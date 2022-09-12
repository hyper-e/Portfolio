// import transitions from "@material-ui/core/styles/transitions";
import React, {Component} from "react";
import ello from "../images/hello.png";


class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorChange: ""
        };
    }

componentDidMount() {
    this.pageLoad = [setInterval(
        () => {
            this.setState({colorChange:"#ca3e47"})
        }, 1500)
    ]
                
        return () => clearInterval(this.pageLoad)

}

componentWillUnmount() {
    clearInterval(this.pageLoad);
}

    render(){
        return(
            <div id="intro">
            <div className="introDescription">
            <div id="h_1" className="introPara" >Hello, I'm <span className="fullName">Eduardo Reta Jr.</span></div>
            <div id="h_2" className="introPara">I'm a <span>full stack web developer.</span></div>
            
            {/* <div id="h_3" style={{visibility: this.state.h_3}} className="introPara"><span>Ready to bring your website and ideas online.</span></div> */}
            </div>
            {/* <img src={Hello} /> */}
            </div> 
        )
    }
};

export default Intro;