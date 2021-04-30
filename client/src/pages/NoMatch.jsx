import React, { Component } from "react";
import Nav from "../components/Nav";
import DeadLink from "../components/images/dead_link.png";

class NoMatch extends Component {
    render() {
        return (
            <div className="noMatch">
            <Nav />
                <div className="errorMessage">
                <a className="errorHomeBtn" href="/">Home</a>
                <h1 className="errorPara">404 Sorry!! Link does not exist!!</h1>
                <img id="deadLink" src={DeadLink} alt="deadLink" />
                </div>
            </div>
        )
    }
};

export default NoMatch;