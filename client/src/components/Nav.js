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
         <div className="name">Eduardo Reta</div>
          <div className="linkBox">
              <NavLink to="/" className="buttonLink">About</NavLink>
              <span className="seperator">|</span>
              <NavLink to="/portfolio" className="buttonLink">Portfolio</NavLink>
              <span className="seperator">|</span>
              <NavLink to="/resume" className="buttonLink">Resume</NavLink>
              <span className="seperator">|</span>
              <NavLink to="/contact" onClick={this.handleEmailClick} className="buttonLink">Contact</NavLink>
          </div>
      </nav>
    );
  }
}
  
  export default Nav;
  
