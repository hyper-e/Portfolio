import React, { Component } from "react";
import "../Css/navStyle.css";
import NavSocialLinks from "./NavSocialLinks";
import { Link } from 'react-scroll';

const windowWidth = window.matchMedia("(min-width: 800px)")

// const navActive = () => {
//   if (window.scrollY > 100) {
//     return true;
//   } else {
//     return false;
//   } 
// };


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      matches: windowWidth.matches,
      active: false
    };
    this.navActive = this.navActive.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.navActive);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.navActive)
  }

navActive() {
    if (window.scrollY > 100) {
      this.setState({active: true})
    } else {
      this.setState({active: false})
    } 
  };
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
         <div className={this.state.active ? "navBar active" : "navBar"}>
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
