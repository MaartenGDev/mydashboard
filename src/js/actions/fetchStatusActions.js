import * as types from './actionTypes';

export function beginFetchCall(){
    return {type: types.BEGIN_FETCH_CALL};
}

export function fetchCallError(){
    return {type: types.FETCH_CALL_ERROR};
}