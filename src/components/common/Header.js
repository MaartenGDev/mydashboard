import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About page</Link></li>
                    <li><Link to="/collections">Collections</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;