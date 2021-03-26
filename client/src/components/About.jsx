import React, { Component } from "react";
import Nav from "./Nav";
import "../components/CSS/navStyle.css"

class HomePage extends Component {

    render() {
        return (

                <div id="info">
                    <div className="homeText">
                        <h1 className="h1Title">About Me</h1>
                        <div id="aboutMe">
                            <p>
                                Hi my name is Eduardo Reta. I am a recent graduate from the UNC Full Stack Web Developer Boot Camp and I am eager to begin 
                                exploring web development opportunities. I have a passion for building front and back end web applications, this can be showcased via my portfolio.
                            </p>

                      {/* <p>Welcome my name is <span className="standOut">Eduardo Reta Jr</span>. I currently live and work in the triangle area. I'm still working in

                        the construction industry as a heavy equipment operater. Another role I have performed was a leadership role as a supervisor.
                        
                        Managed a group of 5 individuals to complete and build infrastructures using blueprints and G.P.S. Elevations for 2 years in 2016-2018.

                        I embrace changes and adapt to the enviorment quickly and efficiently. Great communication skills with the ability to balance multiple
                        
                        demands and exceed expectations. I enrolled into <span className="standOut">The Coding Boot Camp at UNC</span> to transition my career into a more technical role.

                        I graduated in August 2019 from the program. The boot camp was a 24-week program which focused on gaining technical programming and market-driven skills.

                        Now a <span className="standOut">Full Stack Web Developer </span> seeking for an oppurtinity to put my newly developed skill into your company and my growth of knowledge.</p> */}
                        </div>
                    </div>
                    <div className="homeText1">
                        <h1 className="h1Title">SKILLS</h1>
                            <ul>

                                <li className="skill">HTML</li>
                                <li className="skill">CSS</li>
                                <li className="skill">JAVASCRIPT</li>
                                <li className="skill">JQUERY</li>
                                <li className="skill">React.js</li>
                                <li className="skill">MongoDB</li>
                                <li className="skill">Bootstrap</li>
                                <li className="skill">Node.js</li>
                                <li className="skill">Heroku</li>
                                <li className="skill">Git/GitHub</li>
                                <li className="skill">RESTful API's</li>
                            </ul>
                    </div>
                </div>
            
        );
    };
};

export default HomePage;