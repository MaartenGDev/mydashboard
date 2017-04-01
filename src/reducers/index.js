import {combineReducers} from 'redux';
import collections from './collectionReducer';
import collectionTypes from './collectionTypeReducer';

const rootReducer = combineReducers({
    collections,
    collectionTypes
});


export default rootReducer;