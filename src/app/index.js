//console.log('Hello World');

import store from './store';
import React from 'react';
import ReactDom from 'react-dom';
import {Main} from './components/Main';
import App from './components/App';

ReactDom.render(<App/>,document.getElementById('app'));

//console.log(store.getState());