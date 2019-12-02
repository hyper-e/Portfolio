import React, { Component } from "react";
import "./Css/page.css";
import Nav from "../components/Nav";
class NoMatch extends Component {
    render() {
        return (
            <div className="noMatch">
                <div className="navBarFix"><Nav /></div>
                <h1>404 Sorry!! Page does not exist!!</h1>
            </div>
        )
    }
};

export default NoMatch;