import React from 'react';
import {FormGroup, FormControl, ControlLabel, Grid} from 'react-bootstrap';
import {Switch, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';

class Router extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" Component={Router}></Route>
                    <Route exact path="/home" Component={Home}></Route>
                </Switch>
            </div>
        );
    }
}

export default Router;