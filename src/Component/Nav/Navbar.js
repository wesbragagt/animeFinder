import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const Navbar = ({ title, icon }) => {
    return (
        <Fragment>
            <nav className="navbar bg-primary">
                <h1>
                    {title}
                    <i className={icon} />
                </h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About anime finder</Link>
                    </li>
                </ul>
            </nav>
        </Fragment>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'animefinder',
    icon: 'fas fa-search'
};

export default Navbar;
