import React, { Component } from "react";
import "./Css/page.css";
import Links from "../components/Links";

class Portfolio extends Component {
    render() {
        return(
            <React.Fragment>
            <h1>Hello</h1>
            <Links linkBox="portLinks" />
            </React.Fragment>
        );
    };
};

export default Portfolio;