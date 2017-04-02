import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router-dom';


const Header = ({loading}) => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About page</Link></li>
                    <li><Link to="/collections">Collections</Link></li>

                    {loading &&
                        <li>Loading...</li>
                    }
                </ul>
            </nav>
        </header>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;