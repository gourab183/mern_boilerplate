import {take, put, select} from 'redux-saga/effects';
import * as mutation from './mutation';
import uuid from 'uuid';

export function* sagaFunc() {
    while (true) {
        const {groupId} = yield take(mutation.REQUEST_TASK_CREATION);
        const ownerId = 'U1';
        const taskId = uuid();
        yield put(mutation.createTask(groupId, ownerId, taskId))
        console.log('Got group Id',groupId);
    }
}