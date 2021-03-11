import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./CSS/navStyle.css";
import Dropdown from "react-bootstrap/Dropdown";
import NavSocialLinks from "./NavSocialLinks";
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: window.matchMedia("(min-width: 800px)").matches};
  }

  // componentDidMount() {
  //   const handler = e => this.setState({matches: e.matches});
  //   window.matchMedia("(min-width: 800px)").addListener(handler);
  // }

  // handlePageLink = () => {
  //   this.setState
  // };

  render() {
    return (
      <div id="deskNav">
      {this.state.matches && (
        <nav>
         <div className="navBar">
           <div className="linkBox">
             <Link to="about" className="buttonLink" smooth={true} delay={400} duration={700}>
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
      {/* {!this.state.matches && (
         <nav className="navTwo">
            <div className="collapseNav">
              <div><h3 className="navTwoName">Eduardo Reta</h3></div>
               <Dropdown>
                 <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic-button"
                ></Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/">Home</Dropdown.Item>
                  <Dropdown.Item href="/portfolio">Portfolio</Dropdown.Item>
                  <Dropdown.Item href="/resume">Resume</Dropdown.Item>
                  <Dropdown.Item href="/contact">Contact</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            </nav>
      )} */}
      </div>
    );
  }
}

export default Nav;
