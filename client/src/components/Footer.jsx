import React, {Component} from "react";
import NavSocialLinks from "./NavSocialLinks";
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import "./CSS/footer.css"

class Footer extends Component {
    
    render(){

        const year = new Date().getFullYear();

        

        return(
            <div id="footer">
             <NavSocialLinks NSL="footerLinks" iconStyle="socialFooterLinks" />
                <p><strong>Copyright &copy; </strong> 2019 - {year}</p>
                <button className="scrollUp" onClick={() => {
                    scroll.scrollToTop();
                }}>Back to Top</button>
            </div> 
        )
    }
};

export default Footer;