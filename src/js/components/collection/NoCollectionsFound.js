import React from 'react';

const NoCollectionsFound = (props) => {
    return (
        <section className="collection-not-found l-center">
            <h3 className="collection-not-found__title">No Collections found. Want to create one?</h3>
            <img className="collection-not-found__image" src={"/images/collection.png"} />

            <a className="collection-not-found__button btn btn--flat" href="/collections/create">Create</a>
        </section>
    );
};


export default NoCollectionsFound;