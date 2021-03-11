import React, { Component ,useState} from "react";
import "./Css/page.css";
import Nav from "../components/Nav";
import "../components/CSS/navStyle.css";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import "../pages/Css/App.css";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MobileNav from "../components/MobileNav";

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
                        <Portfolio />
                        <Resume />
                        <Contact />
                        <Footer />
                    </div>
                )
}


// class Home extends Component {





//     render(){
//         return (
//             <div className="homePage">
//             {SimpleMediaQuery() ? "yes" : "no"}
//                 <Nav />
//                 <Intro />
//                 <About />
//                 <Portfolio />
//                 <Resume />
//                 <Contact />
//                 <Footer />
//             </div>
//         )
//     }
// }

export default Home;