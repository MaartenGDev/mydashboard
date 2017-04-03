import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import * as types from './collectionTypes';

import TableCollection from './types/TableCollection';

const Collection = ({collection}) => {
    const items = collection.items.map(item => getComponentForCollectionType(collection.type._name, item));

    return (
        <section>
            <h1> {collection.name}</h1>
            {items}
        </section>
    );
};

function getComponentForCollectionType(type, collection) {
    const {title, description} = collection;

    if (type === types.COLLECTION_TYPE_TABLE) {
        return <TableCollection title={title} description={description}/>
    }
}

Collection.propTypes = {
    collection: PropTypes.object.isRequired
};

export default Collection;