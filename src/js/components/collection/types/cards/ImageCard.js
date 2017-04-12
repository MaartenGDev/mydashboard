import React, {PropTypes} from 'react';

const ImageCard = ({title, image, description}) => {
    return (
        <section className="collection-card collection-card--image">
            <section className="collection-card__image-wrapper">
                <img className="collection-card__image" src={image} />
                <h3 className="collection-card__title collection-card__title--overlay">{title}</h3>
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

ImageCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default ImageCard;
