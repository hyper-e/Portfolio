import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./CSS/navStyle.css";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Navbar from "react-bootstrap/Navbar";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: window.matchMedia("(min-width: 800px)").matches};
  }

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 800px)").addListener(handler);
  }

  // handlePageLink = () => {
  //   this.setState
  // };

  render() {
    return (
      <div >
      {this.state.matches && (
        <nav>
         <div className="navBar">
           <div className="name">Eduardo Reta</div>
           <div className="linkBox">
             <NavLink to="/" className="buttonLink">
               About
             </NavLink>
             <span className="seperator">|</span>
             <NavLink to="/portfolio" className="buttonLink">
               Portfolio
             </NavLink>
             <span className="seperator">|</span>
             <NavLink to="/resume" className="buttonLink">
               Resume
             </NavLink>
             <span className="seperator">|</span>
             <NavLink
              to="/contact"
              className="buttonLink"
            >
              Contact
            </NavLink>
          </div>
        </div>
        </nav>
      )}
      {!this.state.matches && (
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
      )}
      </div>
    );
  }
}

export default Nav;
