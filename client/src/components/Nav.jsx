import React, { Component } from "react";
import "./CSS/navStyle.css";
import NavSocialLinks from "./NavSocialLinks";
import { Link } from 'react-scroll';


const navActive = () => {
  if (window.scrollY > 100) {
    return true;
  } else {
    return false;
  } 
};
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      matches: window.matchMedia("(min-width: 800px)").matches,
      sticky: navActive()
    };
    
  }
  componentDidMount(){
    window.addEventListener("scroll", () => {
      this.setState({sticky: navActive()})
    })
  }
  render() {
    return (
      <div id="deskNav">
      {this.state.matches && (
        <nav>
         <div className={this.state.sticky ? "navBar active" : "navBar"}>
           <div className="linkBox">
             <Link to="info" className="buttonLink" smooth={true} delay={400} duration={700}>
               About
             </Link>
             
             <Link to="portfolio" className="buttonLink" smooth={true} delay={400} duration={700}>
               Portfolio
             </Link>

             <a href="/mobilePDF" className="buttonLink">Resume</a>
                  
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
