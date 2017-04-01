import collectionTypeApi from '../api/collectionTypeApi';
import * as types from './actionTypes';

export function loadCollectionTypesSuccess(collectionTypes){
    return {type: types.LOAD_COLLECTION_TYPES_SUCCESS, collectionTypes};
}

export function loadCollectionTypes(){
    return async dispatch => {
        const collectionTypes = await collectionTypeApi.find();

        dispatch(loadCollectionTypesSuccess(collectionTypes));
    };
}