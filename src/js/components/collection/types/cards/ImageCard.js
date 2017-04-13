import React, {PropTypes} from 'react';

const ImageCard = ({title, image, description}) => {
    return (
        <section className="collection-card collection-card--image">
            <section className="collection-card__image-wrapper">
                <img className="collection-card__image" src={image} />
            </section>
            <section className="collection-card__primary-title collection-card__primary-title--image">
                <h1 className="collection-card__title">{title}</h1>
            </section>
            <section className="collection-card__supporting-text">
                <p className="collection-card__text">{description.substring(0, 230)}...</p>
            </section>
            <section className="collection-card__actions">
                <a className="link link--material">Learn More</a>
            </section>
        </section>
    );
};

ImageCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default ImageCard;
