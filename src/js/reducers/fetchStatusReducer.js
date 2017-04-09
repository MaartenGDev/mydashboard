import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) === '_SUCCESS';
}

export default function fetchStatusReducer(state = initialState.fetchCallsInProgress, action) {
    if (action.type === types.BEGIN_FETCH_CALL) {
        return state + 1;
    } else if (action.type === types.FETCH_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
        return state - 1;
    }

    return state;
}