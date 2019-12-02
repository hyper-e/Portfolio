import React, { Component } from "react";
import "./Css/page.css";
import Links from "../components/Links";
import Nav from "../components/Nav";
import "../components/CSS/navStyle.css"
// import { faGit } from "@fortawesome/free-brands-svg-icons";
class HomePage extends Component {

    render() {
        return (

            <div className="homePage">
                <Nav />
                <div id="info">
                    <div className="homeText">
                        <h1 className="h1Title">About Me</h1>
                        <br />
                        <h3 id="aboutMe">
                      <p>Welcome my name is <span className="standOut">Eduardo Reta Jr</span>. I currently live and work in the triangle area. I'm still working in

                        the construction industry as a heavy equipment operater. Another role I have performed was a leadership role as a supervisor.
                        
                        Managed a group of 5 individuals to complete and build infrastructures using blueprints and G.P.S. Elevations for 2 years in 2016-2018.

                        I embrace changes and adapt to the enviorment quickly and efficiently. Great communication skills with the ability to balance multiple
                        
                        demands and exceed expectations. I enrolled into <span className="standOut">The Coding Boot Camp at UNC</span> to transition my career into a more technical role.

                        I graduated in August 2019 from the program. The boot camp was a 24-week program which focused on gaining technical programming and market-driven skills.

                        Now a <span className="standOut">Full Stack Web Developer </span> seeking for an oppurtinity to put my newly developed skill into your company and my growth of knowledge.</p>
                        </h3>
                    </div>
                    <div className="homeText1">
                        <h1 className="h1Title">SKILLS</h1>
                        <h3>
                            <ul id="skill">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JAVASCRIPT</li>
                                <li>JQUERY</li>
                                <li>React.js</li>
                                <li>MongoDB</li>
                                <li>Bootstrap</li>
                                <li>Node.js</li>
                                <li>Heroku</li>
                                <li>Git/GitHub</li>
                                <li>RESTful API's</li>
                            </ul>
                        </h3>
                    </div>

                    <Links linkBox="links" />
                </div>
            </div>
        );
    };
};

export default HomePage;