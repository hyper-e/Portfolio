import React, { useState, useEffect } from "react";
import NavSocialLinks from "./NavSocialLinks";
import {animateScroll as scroll} from "react-scroll";
import "../Css/footer.css";

function Footer(props) {
    const year = new Date().getFullYear();
    const [btnMargin, setMargin] = useState(false);
    useEffect(()=>{
      const Width = () => {
        const width = window.innerWidth;
        if (width < 800) {
          setMargin(true);
        } else {
          setMargin(false);
        }
      };
      window.addEventListener("resize", Width);
      return () => {
        window.removeEventListener("resize", Width);
      }

    },[btnMargin]);

    return (
        <div id="footer">
                 <NavSocialLinks NSL="footerLinks" iconStyle="socialFooterLinks" />
                 <p>
                   <strong>Copyright &copy; </strong> 2019 - {year}
                 </p>
                 {
                   <button style={{display: `${props.styleButton}`, marginTop: `${btnMargin ? "1%" : "0.5%"}`}}
                     className="scrollUp"
                     onClick={() => {
                      scroll.scrollToTop();
                    
                     }}
                   >
                     Back to Top
                   </button>
                 }
               </div>
    )
};

export default Footer;
