import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const Navbar = props => {
    return (
        <Fragment>
            <nav className="nav bg-primary">
                <h1>
                    {props.title}
                    <i className={props.icon} />
                </h1>
            </nav>
        </Fragment>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'animefinder',
    icon: 'fas fa-search'
};

export default Navbar;
