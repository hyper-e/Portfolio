import React, { Component } from "react";
import "../Css/navStyle.css";
import NavSocialLinks from "./NavSocialLinks";
import { Link } from 'react-scroll';


const navActive = () => {
  if (window.scrollY > 100) {
    return true;
  } else {
    return false;
  } 
};

const windowHeight = window.matchMedia("(min-width: 800px)")

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      matches: windowHeight.matches,
      sticky: navActive()
    };
      window.addEventListener("scroll", () => {
        this.setState({sticky: navActive()})});

  }
  
  // componentDidMount(){
  //   this._isMounted = true;
  //   if (this._isMounted) {
    //  window.addEventListener("scroll", () => {
    //     this.setState({sticky: navActive()})});
  //   }
  // }
  // componentWillUnmount() {
  //   this._isMounted = false;
  // }

  // unMountScroll(e) {
  //   const controller = new AbortController();
  //   controller.abort();
  // }

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
