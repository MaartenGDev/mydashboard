import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import * as types from './collectionTypes';

import TableCollection from './types/TableCollection';
import CardCollection from './types/CardCollection';

const Collection = ({collection, collectionType}) => {
    const items = collection.items.map((item, index) => getComponentForCollectionType(index, collectionType.name, item));

    return (
        <section>
            <h1><Link to={"/collections/" + collection._id}>{collection.name}</Link></h1>
            {items}
        </section>
    );
};

function getComponentForCollectionType(key, type, collection) {
    const {title, description} = collection;

    if (type === types.COLLECTION_TYPE_TABLE) {
        return <TableCollection key={key} title={title} description={description}/>
    }else if(type === types.COLLECTION_TYPE_CARD){
        return <CardCollection key={key} title={title} description={description}/>
    }
}

Collection.propTypes = {
    collection: PropTypes.object.isRequired,
    collectionType: PropTypes.object.isRequired
};

export default Collection;