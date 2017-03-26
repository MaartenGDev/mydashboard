import {combineReducers} from 'redux';
import collections from './collectionReducer';

const rootReducer = combineReducers({
    collections
});


export default rootReducer;