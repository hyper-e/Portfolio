import React, { Component } from "react";
import Nav from "../components/Nav";

class NoMatch extends Component {
    render() {
        return (
            <div className="noMatch">
            <Nav />
                <div className="errorMessage">
                <h1>404 Sorry!! Page does not exist!!</h1>
                </div>
            </div>
        )
    }
};

export default NoMatch;