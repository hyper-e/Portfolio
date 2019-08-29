import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./CSS/navStyle.css";
class Nav extends Component {
    render(){
    return (
      <nav className="navBar">
         <div className="name"><img alt="logo" className="compImg" src={require("../pages/images/computerScreen.png")} />Eduardo Reta</div>
          <div className="linkBox">
              <NavLink to="/" className="buttonLink">HomePage</NavLink>
              <span className="seperator">|</span>
              <NavLink to="/portfolio" className="buttonLink">Portfolio</NavLink>
              <span className="seperator">|</span>
              <NavLink to="/contact" className="buttonLink">Contact</NavLink>
          </div>
      </nav>
    );
  }
}
  
  export default Nav;
  
