import React from 'react';
import PropTypes from 'prop-types';

import Collection from './Collection';

const CollectionList = ({collections, collectionTypes}) => {
    return (
        <section>
            {collections.map((collection, index) => {
                const collectionType = collectionTypes.find(type => type.id === collection.type_id);

                return <Collection key={index} collection={collection} collectionType={collectionType}/>;
            })}
        </section>
    );
};

CollectionList.propTypes = {
    collections: PropTypes.array.isRequired,
    collectionTypes: PropTypes.array.isRequired
};

export default CollectionList;
