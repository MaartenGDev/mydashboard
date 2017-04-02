import * as types from './actionTypes';
import collectionApi from '../api/collectionApi';
import {beginFetchCall, fetchCallError} from './fetchStatusActions';

export function loadCollectionsSuccess(collections){
    return {type: types.LOAD_COLLECTIONS_SUCCESS, collections};
}

export function createCollectionSuccess(collection){
    return {type: types.CREATE_COLLECTION_SUCCESS, collection};
}

export function updateCollectionSuccess(collection){
    return {type: types.UPDATE_COLLECTION_SUCCESS, collection};
}

export function loadCollections(){
    return async function (dispatch) {
        dispatch(beginFetchCall());
        const collections = await collectionApi.find();

        dispatch(loadCollectionsSuccess(collections));
    };
}

export function saveCollection(collection){
    return async function (dispatch, getState){

        dispatch(beginFetchCall());

        try{
            let savedCourse = await collectionApi.store(collection);

            return collection._id ?
                dispatch(updateCollectionSuccess(savedCourse)) :
                dispatch(createCollectionSuccess(savedCourse));
        } catch (err) {
            dispatch(fetchCallError(err))

            throw err;
        }
    };
}