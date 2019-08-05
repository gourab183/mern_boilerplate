import React from 'react';
import {connect} from 'react-redux';

const TaskDetails = (task) => {
    return(
        <div>Task</div>
    )
}

const manageStateToProps = state=>state;

export default connect(manageStateToProps)(TaskDetails);