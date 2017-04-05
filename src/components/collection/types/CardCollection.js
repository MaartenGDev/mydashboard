import React, {PropTypes} from 'react';

const CardCollection = ({title, description}) => {
    return (
        <section className="card">
            <section className="card__primary-title">
                <h1 className="card__title">{title}</h1>
            </section>
            <section className="card__supporting-text">
                <p>{description}</p>
            </section>
            <section className="card__actions">
                <a className="link link--material">Learn More</a>
            </section>
        </section>
    );
};

CardCollection.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default CardCollection;