import React, { Component } from "react";
import Links from "./Links";

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
            
            <div className="contact">
                <div className="centerEmail">
                <div className="emailMessage">Click my  <strong>Email</strong> 
                <br />
                to get in touch.  
                <br />
                or
                <br />
                Checkout my <strong>Resume</strong>.
                <br />
                <br/> 
                Email: <span className="emailLink" onClick={this.handleEmailClick}>dev.eddie.reta@gmail.com</span>
                <br />
                <br />
                Resume: {this.resumeLink()}
                </div>
                </div>
                <Links linkBox="contactLinks" />
            </div>
        );
    };
};

export default Contact;