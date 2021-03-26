import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch }  from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import "./pages/Css/App.css";
import Home from "./pages/Home";
import MobileResume from "./pages/MobileResume";




class App extends Component {
    render() {
        return(
                <Router>
               
                        
                    <Switch>
                    <Route exact path={"/"} component={Home} />
                    <Route exact path={"/mobilePDF"} component={MobileResume} />
                    <Route component={ NoMatch } />
                    </Switch>
                  
                </Router>
        );
    };
};

export default App;