import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const TaskList = ({tasks}) => {
    return(
        <div>
        {tasks.map((task)=>
            <Link to={`/task/${task.id}`} key={task.id}>
            <ul>
                <li key={task.id}>{task.name}</li>
                </ul></Link>)}       
        </div>
    )
}

const manageStateToProps = (state, ownProps)=> {
    const groupId = ownProps.id;
    return {
        id: groupId,
        tasks: state.tasks.filter((task)=>task.group === groupId)
    }
}

export const TaskLists = connect(manageStateToProps)(TaskList)