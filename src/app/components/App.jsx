import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Router from './Router';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        );
    }
}

export default App;