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
            let updatedCollectionIndex = 0;

            collections.forEach((collection, index) => {
                if(collection.id === action.collection._id){
                    updatedCollectionIndex = index;
                }
            });

            collections[updatedCollectionIndex] = Object.assign({}, action.collection);

            return collections;
        }

         default:
            return state;
    }
}
