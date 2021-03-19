import React, { useState } from "react";
import { Button, Menu, MenuItem, Popper, makeStyles, Fade, ClickAwayListener} from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
// function handleClick() {
//   console.log("button")
// }
// function handleClose() {
//   console.log("close");
// }
const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));


function MobileNav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(false);


  const handleClick = (event) => {
    setAnchorEl(anchorEl ? false : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'transitions-popper' : undefined;

  const handleClose = () => {
    setAnchorEl(false)
  };

  return (
    <div id="mobNav">
       <ClickAwayListener onClickAway={handleClose}>
      <Button
        size="large"
        variant="outlined"
        color="secondary"
        aria-describedby={id} type="button" onClick={handleClick}
      >
      Menu
      </Button>
      </ClickAwayListener>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
      {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <div className={classes.paper}>
            <MenuItem>
          <Link
            to="about"
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
        <MenuItem>
        <Link
            to="intro"
            className="buttonLink"
            smooth={true}
            delay={400}
            duration={700}
            onClick={handleClose}
          >
          Top-<FontAwesomeIcon icon={faChevronUp} size="2x" />
          </Link>
        </MenuItem>
            </div>
          </Fade>
        )}
      {/* <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <Link
            to="about"
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
          {" "}
          <Link
            to="portfolio"
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
        <MenuItem>
        <Link
            to="intro"
            className="buttonLink"
            smooth={true}
            delay={400}
            duration={700}
            onClick={handleClose}
          >
          <FontAwesomeIcon icon={faChevronUp} size="2x" />
          </Link>
        </MenuItem>
      </Menu> */}

      </Popper>
    </div>
  );
}

export default MobileNav;
