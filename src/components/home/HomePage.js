import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <section>
                <h1>Hello Home</h1>
                <p>React here</p>
                <Link to="/about">About page</Link>
            </section>
        );
    }
}

export default HomePage;