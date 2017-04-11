import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function collectionReducer(state = initialState.collections, action) {
    switch (action.type) {
        case types.LOAD_COLLECTIONS_SUCCESS: {
            return action.collections;
        }

        case types.CREATE_COLLECTION_SUCCESS: {
            return [...state,
                Object.assign({}, action.collection)
            ];
        }

        case types.UPDATE_COLLECTION_SUCCESS: {
            let collections = [...state];

            const updatedCollectionIndex = collections.findIndex(collection => collection.id === action.collection.id);

            collections[updatedCollectionIndex] = Object.assign({}, action.collection);

            return collections;
        }

         default:
            return state;
    }
}
