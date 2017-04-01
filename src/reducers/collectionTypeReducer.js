import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function collectionTypeReducer(state = initialState.collectionTypes, action){
    switch(action.type) {
        case types.LOAD_COLLECTION_TYPES_SUCCESS:
            return action.collectionTypes;

        default:
            return state;
    }
}