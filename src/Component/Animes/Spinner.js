import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
    <Fragment>
        <img
            className="all-center"
            src={spinner}
            alt="Loading..."
            style={{ width: '200px', display: 'block' }}
        />
    </Fragment>
);

export default Spinner;
