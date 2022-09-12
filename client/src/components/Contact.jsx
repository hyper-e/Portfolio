import React, { Component } from "react";
import Email from "./email";

class Contact extends Component {
   
    handleEmailClick = () => {
        window.location.href = "mailto:dev.eddie.reta@gmail.com";
      };

    resumeLink = () => {
          return (
           
            // <span className="emailLink" onClick={openPDF}>Click for Resume</span>
            <a className="emailLink" href="mobilePDF">Click for Resume</a>
          
          )
    };

    render() {
        return(
            
            <div className="contact" name="contact">
            <Email />
                {/* <div className="centerEmail">
                <div className="emailMessage">Here is my <strong>Email</strong> 
                <br />
                to get in touch.  
                <br />
                <br/> 
                Email: <span className="emailLink" onClick={this.handleEmailClick}>dev.eddie.reta@gmail.com</span>
                <br />
                </div>
                </div>
                <Links linkBox="contactLinks" /> */}
            </div>
        );
    };
};

export default Contact;