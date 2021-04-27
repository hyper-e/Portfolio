import React from "react";
import NavSocialLinks from "./NavSocialLinks";

import {

  animateScroll as scroll,
} from "react-scroll";
import "./CSS/footer.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";


function Footer(props) {
  //  const [load, setReload] = useState(false);
    const year = new Date().getFullYear();
    
    const SimpleMediaQuery = () => {
      
      const matches = useMediaQuery("(min-width:800px)");
      return matches;
    };

    return (
        <div id="footer">
                 <NavSocialLinks NSL="footerLinks" iconStyle="socialFooterLinks" />
                 <p>
                   <strong>Copyright &copy; </strong> 2019 - {year}
                 </p>
                 {SimpleMediaQuery() && (
                   <button style={{display: `${props.styleButton}`}}
                     className="scrollUp"
                     onClick={() => {
                       scroll.scrollToTop();
                    
                     }}
                   >
                     Back to Top
                   </button>
                 )}
               </div>
    )
};

export default Footer;
