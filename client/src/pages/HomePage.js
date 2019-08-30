import React, { Component } from "react";
import "./Css/page.css";
import Links from "../components/Links";
class HomePage extends Component {
   
    render() {
        return(
            <React.Fragment>
              <div className="homeText">
                 <h1 className="h1Title">Web Developer! <br /> Crafting a smooth experience for the user.</h1>
                    <h2>I have a diverse set of skills, which include HTML, CSS, and JAVASCRIPT. <br /> Worked with other related programs and frameworks like 
                      JQUERY, React.js,  MongoDB and MySQL.</h2>
                      </div>
                      <Links linkBox="links" />
            </React.Fragment>
        );
    };
};

export default HomePage;