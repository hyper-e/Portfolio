import React, { Component } from "react";
import "./Css/page.css";
import Links from "../components/Links";
import Mail from "./images/mail.png"
import Nav from "../components/Nav";
class Contact extends Component {
    render() {
        return(
            
            <div className="contactPage">    
            <div className="navBarFix"><Nav /></div>           
                {/* <div className="mailImage"><img src={Mail} alt="Mail" className="mailPic" /></div> */}
                <div className="emailMessage">Click the <strong>Contact</strong> link up top 
                <br />
                to get in touch!
                <br/> 
                Email: <span className="emailLink">dev.eddie.reta@gmail.com</span>

                </div>
                <Links linkBox="contactLinks" />
            </div>
        );
    };
};

export default Contact;