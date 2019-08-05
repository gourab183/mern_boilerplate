import {createStore, applyMiddleware, combineReducers} from 'redux';
import {defaultState} from '../../server/defaultState';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import * as sagas from './saga.mock';
import * as mutation from './mutation';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(combineReducers({
    session(session = defaultState.session) {
        console.log('session',session);
        return session
    },
    tasks(tasks=defaultState.tasks, action) {
        switch(action.type) {
            case mutation.CREATE_TASK:
                    return [...tasks,{
                        name:"Refactor tests 1",
                        id: action.taskId,
                        group:action.groupId,
                        owner:"U1",
                        isComplete:false,
                    }];
                console.log(action);
                break;
            default: 
                return tasks;
        }
    },
    comments(comment = defaultState.comments, actions) {
        return comment
    },
    groups(groups = defaultState.groups, actions) {
        return groups
    },
    users(user = defaultState.users, actions) {
        return user
    }
}), applyMiddleware(createLogger(), sagaMiddleware));

for(let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}


export default store;