import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./CSS/navStyle.css";
class Nav extends Component {

  handleEmailClick = () => {
    window.location.href = 'mailto:dev.eddie.reta@gmail.com';
};

    render(){
    return (
      <nav className="navBar">
         <div className="name"><img alt="logo" className="compImg" src={require("../pages/images/computerScreen.png")} />Eduardo Reta</div>
          <div className="linkBox">
              <NavLink to="/" className="buttonLink"><strong>About</strong></NavLink>
              <span className="seperator">|</span>
              <NavLink to="/portfolio" className="buttonLink"><strong>Portfolio</strong></NavLink>
              <span className="seperator">|</span>
              {/* <NavLink to="/resume" className="buttonLink"><strong>Resume</strong></NavLink>
              <span className="seperator">|</span> */}
              <NavLink to="/contact" onClick={this.handleEmailClick} className="buttonLink"><strong>Contact</strong></NavLink>
          </div>
      </nav>
    );
  }
}
  
  export default Nav;
  
