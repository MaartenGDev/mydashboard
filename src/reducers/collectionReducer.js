import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function collectionReducer(state = initialState.collections, action) {
    switch (action.type) {
        case types.LOAD_COLLECTIONS_SUCCESS:
            return action.collections;

        case types.CREATE_COLLECTION_SUCCESS:
            return [...state,
                Object.assign({}, action.collection)
            ];

        case types.UPDATE_COLLECTION_SUCCESS:
            return [
                ...state.filter(collection => collection._id !== action.collection._id),
                Object.assign({}, action.collection)
            ];

        default:
            return state;
    }
}
