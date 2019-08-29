import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch }  from "react-router-dom";
import HomePage from "./pages/HomePage";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import "./pages/Css/App.css";

class App extends Component {
    render() {
        return(
                <Router>
                    <div className="homePage">
                        <Nav />
                    <Switch>
                    <Route exact path={"/"} component={HomePage} />
                    <Route component={ NoMatch } />
                    </Switch>
                    </div>
                </Router>
        );
    };
};

export default App;