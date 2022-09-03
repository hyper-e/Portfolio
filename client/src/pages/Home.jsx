import React from "react";
import "../Css/style.css";
import Nav from "../components/Nav";
import "../Css/navStyle.css";
import About from "../components/About";
import { Portfolio, MobilePortfolio } from "../components/Portfolio";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import "../Css/mediaQuery.css";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MobileNav from "../components/MobileNav";
import ResumeLink from "../components/ResumeLink.jsx";


function SimpleMediaQuery() {
  const matches = useMediaQuery('(max-width:800px)');
  return matches
};


function Home() {
    return (
                    <div className="homePage">
                    {SimpleMediaQuery() ? <MobileNav /> : <Nav />}
                        <Intro />
                         <About />
                    {SimpleMediaQuery() ? <MobilePortfolio /> : <Portfolio />}
                        <ResumeLink />
                        <Contact /> 
                        <Footer /> 
                    </div>
                )
};

export default Home;