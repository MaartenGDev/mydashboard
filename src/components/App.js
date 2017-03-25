import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Home from './home/HomePage';
import About from './about/AboutPage';
import Header from './common/Header';
import Integrations from './integration/IntegrationsPage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <main>
                    <Header />

                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/integrations" component={Integrations}/>
                </main>
            </Router>
        );
    }
}


export default App;