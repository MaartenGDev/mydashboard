import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import getComponentsForCollectionType from './helpers/getComponentsForCollectionType';


const Collection = ({collection, collectionType}) => {
    const collectionTypeName = collectionType.name;
    const categoryName = collectionType.category;

    const items = getComponentsForCollectionType(collectionTypeName, collection);

    return (
        <section className={`collection collection__type-${categoryName}`}>
            <h1 className="collection__title">
                <Link className="collection__link" to={"/collections/" + collection.id}>{collection.name}</Link>
            </h1>

            <section className={`collection__items collection__items--${categoryName}`}>
                {items}
            </section>
        </section>
    );
};



Collection.propTypes = {
    collection: PropTypes.object.isRequired,
    collectionType: PropTypes.object.isRequired
};

export default Collection;
