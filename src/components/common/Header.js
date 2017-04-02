import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router-dom';


const Header = ({loading}) => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li className="header__item"><Link to="/">Home</Link></li>
                    <li className="header__item"><Link to="/about">About page</Link></li>
                    <li className="header__item"><Link to="/collections">Collections</Link></li>

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