import * as types from '../actions/actionTypes';

export default function collectionReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_COLLECTION:
            return [...state,
                Object.assign({}, action.collection)
            ];
        default:
            return state;
    }
}