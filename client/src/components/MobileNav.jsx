import React, { useState } from "react";
import { Button, MenuItem, Popper, Fade, ClickAwayListener} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faBars } from "@fortawesome/free-solid-svg-icons";
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll'
import "../Css/style.css"
import Box from '@mui/material/Box';
  
function MobileNav() {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      setOpen((previousOpen) => !previousOpen);
    };
  
    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

   const handleClose = () => {
    setOpen(false);
   }
   const scrollTop = () => {
    const scroll = Scroll.animateScroll;
    scroll.scrollToTop();
   }
  
    return (
      <div id="mobNav">
      /* <ClickAwayListener onClickAway={handleClose}>
     <Button
       size="large"
       variant= "contained"
       color="secondary"
       aria-describedby={id} type="button" onClick={handleClick}
     >
    <FontAwesomeIcon icon={faBars} size="2x" />
     </Button>
     </ClickAwayListener>
     <Popper id={id} open={open} anchorEl={anchorEl} transition>
     {({ TransitionProps }) => (
         <Fade {...TransitionProps} timeout={350}>
           <div className="mobileMenuColl">
           <MenuItem>
         <Link
           to="info"
           className="buttonLink"
           smooth={true}
           delay={400}
           duration={700}
           onClick={handleClose}
         >
           About
         </Link>
       </MenuItem>
       <MenuItem>
         <Link
           to="portfolioCarousel"
           className="buttonLink"
           smooth={true}
           delay={400}
           duration={700}
           onClick={handleClose}
         >
           Portfolio
         </Link>
       </MenuItem>
       <MenuItem>
         <Link
           to="contact"
           className="buttonLink"
           smooth={true}
           delay={400}
           duration={700}
           onClick={handleClose}
         >
           Contact
         </Link>
       </MenuItem>
       {/* <MenuItem>
         <Link
           className="buttonLink"
           smooth={true}
           delay={400}
           duration={700}
           onClick={() => {
             window.open("https://docs.google.com/document/d/1KJIBTB8b65RRJXyyalPKKB1rJcQ7EWmnmslmASjEdF8/edit?usp=sharing", "_blank");
             handleClose();
           }}
         >
           Resume
         </Link>
       </MenuItem> */}
       <MenuItem>
         <FontAwesomeIcon className="buttonLink" icon={faArrowUp} size="2x" onClick={scrollTop}/>
       </MenuItem>
           </div>
         </Fade>
       )}
     </Popper> 
     </div>
    );
  }

  export default MobileNav;
