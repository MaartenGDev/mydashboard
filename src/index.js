import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { loadCollections } from './actions/collectionActions';
import { loadCollectionTypes } from './actions/collectionTypeActions';

import App from './components/App';


const store = configureStore();
store.dispatch(loadCollections());
store.dispatch(loadCollectionTypes());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);