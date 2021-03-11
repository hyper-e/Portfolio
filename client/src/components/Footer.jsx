import React, {Component} from "react";
import NavSocialLinks from "./NavSocialLinks";
import { useMedia } from "react-media-hook";
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import "./CSS/footer.css";
import useMediaQuery from '@material-ui/core/useMediaQuery';


// const media = () => {
//     const matches = useMediaQuery('(min-width:600px)');



class Footer extends Component {

//    const matches = useMediaQuery('(min-width:600px)');

    render(){

        const year = new Date().getFullYear();
      
    

        return(
            <div id="footer">
             <NavSocialLinks NSL="footerLinks" iconStyle="socialFooterLinks" />
                <p><strong>Copyright &copy; </strong> 2019 - {year}</p>
                {/* {lessThan800 ? <button className="scrollUp" onClick={() => {
                    scroll.scrollToTop();
                }}>B</button> : <button className="scrollUp" onClick={() => {
                    scroll.scrollToTop();
                }}>Back to Top</button>} */}
                
            </div> 
        )
    }
};

export default Footer;