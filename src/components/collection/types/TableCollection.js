import React, {PropTypes} from 'react';

const TableCollection = ({title, description}) => {
    return (
        <section>
            <h1>{title}</h1>
            <p>{description}</p>
        </section>
    );
};

TableCollection.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default TableCollection;