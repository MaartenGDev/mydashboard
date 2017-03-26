import * as types from './actionTypes';

export function createCollection(collection){
    return {type: types.CREATE_COLLECTION, collection};
}