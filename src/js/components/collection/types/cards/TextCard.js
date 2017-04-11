import React, {PropTypes} from 'react';

const TextCard = ({title, description}) => {
    return (
        <section className="collection-card">
            <section className="collection-card__primary-title">
                <h1 className="collection-card__title">{title}</h1>
            </section>
            <section className="collection-card__supporting-text">
                <p className="collection-card__text">{description}</p>
            </section>
            <section className="collection-card__actions">
                <a className="link link--material">Learn More</a>
            </section>
        </section>
    );
};

TextCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default TextCard;
