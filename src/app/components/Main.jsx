import React from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import {ConnectedDashboard} from '../components/DashBoard';
import {Router, Route} from 'react-router-dom';
import {history} from '../store/history';
import {ConnectedNavigation} from './Navigation';
import TaskDetails from './TaskDetails';
import { Redirect} from 'react-router';

const RouteGuard = Component => ({match})=>{
    if(!store.getState().session.authenticated) {
        console.log('hhhhhhh');
        <Redirect to="/"/>
    }
    else {
        console.log('ffffffffffff',store.getState());
        return <Component match={match}/>
    }
}

export const Main = ()=> {
    return (<Router history={history}><Provider store={store}>
        <div>
        <ConnectedNavigation/>
            <Route exact path="/dashboard" render={RouteGuard(ConnectedDashboard)}/>
            <Route path="/task/:id" render={RouteGuard(TaskDetails)}/>
        </div>
    </Provider>
        </Router>)
}