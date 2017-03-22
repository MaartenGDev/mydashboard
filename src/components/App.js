import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Home from './home/HomePage';
import About from './about/AboutPage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About page</Link></li>
                        </ul>
                    </nav>
                    <main>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                    </main>
                </header>
            </Router>
        );
    }
}


export default App;