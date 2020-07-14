import React, { Component } from "react";
import "./Css/page.css";
import Links from "../components/Links";
import Mail from "./images/mail.png"
import Nav from "../components/Nav";
class Contact extends Component {
   
    handleEmailClick = () => {
        window.location.href = "mailto:dev.eddie.reta@gmail.com";
      };

    render() {
        return(
            
            <div className="contactPage">    
            <div className="navBarFix"><Nav /></div>           
                {/* <div className="mailImage"><img src={Mail} alt="Mail" className="mailPic" /></div> */}
                <div className="emailMessage">Click my <strong>Email</strong> 
                <br />
                to get in touch!
                <br/> 
                Email: <span className="emailLink" onClick={this.handleEmailClick}>dev.eddie.reta@gmail.com</span>

                </div>
                <Links linkBox="contactLinks" />
            </div>
        );
    };
};

export default Contact;