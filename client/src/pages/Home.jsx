import React, { Component } from "react";
import "./Css/page.css";
import Links from "../components/Links";
import Nav from "../components/Nav";
import "../components/CSS/navStyle.css";

class Home extends Component {
    render(){
        return (
            <div className="homePage">
                <Nav />
            </div>
        )
    }
}

export default Home;