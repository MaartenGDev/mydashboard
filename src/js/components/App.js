import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import {connect} from 'react-redux';

import About from './about/AboutPage';
import Header from './common/Header';
import CollectionsPage from './collection/CollectionsPage';
import ManageCollectionPage from './collection/ManageCollectionPage';

class App extends Component {
    render() {
        return (
            <Router>
                <main>
                    <Header loading={this.props.loading}/>
                    <Route exact path="/" component={CollectionsPage}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/collections" component={CollectionsPage}/>
                    <Route exact path="/collections/:id" component={ManageCollectionPage}/>
                </main>
            </Router>
        );
    }
}

App.propTypes = {
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.fetchCallsInProgress > 0
    };
}
export default connect(mapStateToProps)(App);