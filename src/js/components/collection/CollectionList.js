import React, {PropTypes} from 'react';
import Collection from './Collection';

const CollectionList = ({collections, collectionTypes}) => {
    return (
        <section>
            {collections.map((collection, index) => {
                let collectionType = collectionTypes.find(type => type.id === collection.type_id);

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
