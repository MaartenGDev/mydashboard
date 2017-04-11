import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import * as types from './collectionTypes';

import TableCollection from './types/TableCollection';
import CardCollection from './types/CardCollection';
import ChartCollection from './types/ChartCollection';

const Collection = ({collection, collectionType}) => {
    const collectionTypeName = collectionType.name;

    const items = getComponentsForCollectionType(collectionTypeName, collection);

    return (
        <section className={`collection collection__type-${collectionTypeName}`}>
            <h1 className="collection__title">
                <Link className="collection__link" to={"/collections/" + collection.id}>{collection.name}</Link>
            </h1>

            <section className={`collection__items collection__items--${collectionTypeName}`}>
                {items}
            </section>
        </section>
    );
};

function getComponentsForCollectionType(type, collection) {
    if (type === types.COLLECTION_TYPE_TABLE) {
        const {columns, rows} = collection.items;

        return <TableCollection columns={columns} rows={rows} />;
    } else if (type === types.COLLECTION_TYPE_CHART) {
        const { labels, data } = collection.items;

        return <ChartCollection labels={labels} data={data} />;

    } else if (type === types.COLLECTION_TYPE_CARD) {
        const {items} = collection;

        return items.map((currentCollection, index) => {
            const {title, description} = currentCollection;

            return <CardCollection key={index} title={title} description={description}/>;
        });
    }
}

Collection.propTypes = {
    collection: PropTypes.object.isRequired,
    collectionType: PropTypes.object.isRequired
};

export default Collection;
