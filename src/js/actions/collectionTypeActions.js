import collectionTypeApi from '../../api/collectionTypeApi';
import * as types from './actionTypes';
import {beginFetchCall} from './fetchStatusActions';

export function loadCollectionTypesSuccess(collectionTypes){
    return {type: types.LOAD_COLLECTION_TYPES_SUCCESS, collectionTypes};
}

export function loadCollectionTypes(){
    return async dispatch => {
        dispatch(beginFetchCall());

        const collectionTypes = await collectionTypeApi.find();

        dispatch(loadCollectionTypesSuccess(collectionTypes));
    };
}