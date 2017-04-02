import {combineReducers} from 'redux';
import collections from './collectionReducer';
import collectionTypes from './collectionTypeReducer';
import fetchCallsInProgress from './fetchStatusReducer';

const rootReducer = combineReducers({
    collections,
    collectionTypes,
    fetchCallsInProgress
});


export default rootReducer;