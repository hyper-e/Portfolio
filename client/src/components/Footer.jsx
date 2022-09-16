import React, { useState } from "react";
import NavSocialLinks from "./NavSocialLinks";
import {animateScroll as scroll} from "react-scroll";
import "../Css/footer.css";

function Footer(props) {
    const year = new Date().getFullYear();
    
   // useMediaQuery("(min-width:800px)");
//     useEffect(() => {
//     SimpleMediaQuery();
// });

// const SimpleMediaQuery = () => {
      
//   const matches = useMediaQuery("(min-width:800px)");
//    return matches;
//  };
const [btnMargin, setMargin] = useState(false);
const Width = () => {
  const width = window.innerWidth;
  if (width < 800) {
    setMargin(true);
    return true;
  } else {
    setMargin(false);
    return false;
  }
};

    return (
        <div id="footer">
                 <NavSocialLinks NSL="footerLinks" iconStyle="socialFooterLinks" />
                 <p>
                   <strong>Copyright &copy; </strong> 2019 - {year}
                 </p>
                 {
                   <button style={{display: `${props.styleButton}`}}
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
