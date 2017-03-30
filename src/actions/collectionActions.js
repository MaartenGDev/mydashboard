import * as types from './actionTypes';
import collectionApi from '../api/collectionApi';

export function createCollection(collection){
    return {type: types.CREATE_COLLECTION, collection};
}

export function loadCollectionsSuccess(collections){
    return {type: types.LOAD_COLLECTIONS_SUCCESS, collections};
}

export function loadCollections(){
    return async function (dispatch) {
        const collections = await collectionApi.find();

        dispatch(loadCollectionsSuccess(collections));
    };
}