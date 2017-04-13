import React from 'react';
import PropTypes from 'prop-types';

import {Link, IndexLink} from 'react-router-dom';


const Header = ({loading}) => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><Link className="nav__link" to="/">Home</Link></li>
                    <li className="nav__item"><Link className="nav__link" to="/collections/create">Create Collection</Link></li>
                    {loading && <li className="header__item">Loading...</li>}
                </ul>
            </nav>
        </header>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;