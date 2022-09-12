import React, {useEffect, useState} from "react";
import "../Css/style.css";
import Nav from "../components/Nav";
import "../Css/navStyle.css";
import About from "../components/About";
import { Portfolio, MobilePortfolio } from "../components/Portfolio";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import "../Css/mediaQuery.css";
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import MobileNav from "../components/MobileNav";
import ResumeLink from "../components/ResumeLink.jsx";

function Home() {
    const [mobilePortActive, setMobileBoolean] = useState(false);
    const width = window.innerWidth;
    useEffect(() => {
        InitialScreen();       
    },[]);
   const InitialScreen = () => {
    if (width < 800) {
        setMobileBoolean(true);
    }
   }
    window.addEventListener("resize", e => {
                const width = window.innerWidth;
                if (width < 800) {
                    setMobileBoolean(true);
                } else {
                    setMobileBoolean(false)
                } 
            });
        
    return (
                    <div className="homePage">
                    {mobilePortActive ? <MobileNav /> : <Nav />}
                        <Intro />
                        <About />
                    {mobilePortActive ? <MobilePortfolio /> : <Portfolio />} 
                        <ResumeLink />
                        <Contact /> 
                        <Footer />  
                    </div>
                )
};

export default Home;