import React, {PropTypes} from 'react';

const CardCollection = ({title, description}) => {
    return (
        <section className="card">
            <h1>{title}</h1>
            <p>{description}</p>
        </section>
    );
};

CardCollection.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default CardCollection;