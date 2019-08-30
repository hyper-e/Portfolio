import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch }  from "react-router-dom";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import "./pages/Css/App.css";

class App extends Component {
    render() {
        return(
                <Router>
                    <div>
                        <Nav />
                    <Switch>
                    <Route exact path={"/"} component={HomePage} />
                    <Route exact path={"/portfolio"} component={Portfolio} />
                    <Route component={ NoMatch } />
                    </Switch>
                    </div>
                </Router>
        );
    };
};

export default App;