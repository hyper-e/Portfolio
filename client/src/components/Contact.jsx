import React, { Component } from "react";
import Links from "./Links";

class Contact extends Component {
   
    handleEmailClick = () => {
        window.location.href = "mailto:dev.eddie.reta@gmail.com";
      };

    render() {
        return(
            
            <div className="contact">
                {/* <div className="mailImage"><img src={Mail} alt="Mail" className="mailPic" /></div> */}
                <div className="centerEmail">
                <div className="emailMessage">Click my  <strong>Email</strong> 
                <br />
                to get in touch!
                <br/> 
                Email: <span className="emailLink" onClick={this.handleEmailClick}>dev.eddie.reta@gmail.com</span>

                </div>
                </div>
                <Links linkBox="contactLinks" />
            </div>
        );
    };
};

export default Contact;