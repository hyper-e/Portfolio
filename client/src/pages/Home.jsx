import React, { Component } from "react";
import "./Css/page.css";
import Nav from "../components/Nav";
import "../components/CSS/navStyle.css";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Resume from "../components/Resume";
import Contact from "../components/Contact";


class Home extends Component {

    render(){
        return (
            <div className="homePage">
                <Nav />
                <Intro />
                <About />
                <Portfolio />
                <Resume />
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default Home;