import React, { Component } from "react";
import "./CSS/navStyle.css";
import NavSocialLinks from "./NavSocialLinks";
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: window.matchMedia("(min-width: 800px)").matches};
  }

  render() {
    return (
      <div id="deskNav">
      {this.state.matches && (
        <nav>
         <div className="navBar">
           <div className="linkBox">
             <Link to="info" className="buttonLink" smooth={true} delay={400} duration={700}>
               About
             </Link>
             
             <Link to="portfolio" className="buttonLink" smooth={true} delay={400} duration={700}>
               Portfolio
             </Link>
             
             <Link to="resume" className="buttonLink" smooth={true} delay={400} duration={700}>
               Resume
             </Link>
            
             <Link to="contact" className="buttonLink" smooth={true} delay={400} duration={700}>
              Contact
            </Link>
          </div>
          <NavSocialLinks NSL="nsl" iconStyle="navSocialLinks" />
        </div>
        </nav>
      )}
      </div>
    );
  }
}

export default Nav;
