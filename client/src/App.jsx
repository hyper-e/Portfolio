import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch }  from "react-router-dom";
//import HomePage from "./pages/HomePage";
import NoMatch from "./pages/NoMatch";
import "./pages/Css/App.css";
import Home from "./pages/Home";




class App extends Component {
    render() {
        return(
                <Router>
               
                        
                    <Switch>
                    <Route exact path={"/"} component={Home} />
                    <Route component={ NoMatch } />
                    </Switch>
                  
                </Router>
        );
    };
};

export default App;