import React from 'react';
import {connect} from 'react-redux';
import {TaskLists} from './TaskList';
import { requestTaskCreation} from '../store/mutation';

const DashBoard = ({groups, createNewTaskId}) => {
    return(
        <div>DashBoard
            <ul>
        {groups.map((group) => (
            <li key={group.id}>{group.name}
                  <TaskLists id={group.id} name={group.name}/>
                  <button onClick={()=>createNewTaskId(group.id)}>Add</button>
            </li>
        ))
    }
    </ul>
    </div>
    )
}

const manageStateToProps = (state) => {
    return {
        groups: state.groups
    }
}

const manageDispatchToProps = (dispatch, ownProps)=> {
    return {
        createNewTaskId(id) {
            console.log('the id is',id);
            dispatch(requestTaskCreation(id))
        }
    }
}

export const ConnectedDashboard = connect(manageStateToProps, manageDispatchToProps)(DashBoard);

