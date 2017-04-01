import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Home from './home/HomePage';
import About from './about/AboutPage';
import Header from './common/Header';
import CollectionsPage from './collection/CollectionsPage';
import ManageCollectionPage from './collection/ManageCollectionPage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <main>
                    <Header />
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/collections" component={CollectionsPage}/>
                    <Route exact path="/collections/:id" component={ManageCollectionPage}/>
                </main>
            </Router>
        );
    }
}


export default App;