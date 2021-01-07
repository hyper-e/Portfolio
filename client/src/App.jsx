import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch }  from "react-router-dom";
//import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume"
import "./pages/Css/App.css";
import Home from "./pages/Home";

class App extends Component {
    render() {
        return(
                <Router>
               
                        
                    <Switch>
                    <Route exact path={"/"} component={Home} />
                    <Route exact path={"/portfolio"} component={Portfolio} />
                    <Route exact path={"/contact"} component={Contact} />
                    <Route exact path={"/resume"} component={Resume} />
                    <Route component={ NoMatch } />
                    </Switch>
                  
                </Router>
        );
    };
};

export default App;