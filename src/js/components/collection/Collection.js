import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import * as types from './collectionTypes';

import TableCollection from './types/TableCollection';

import TextCard from './types/cards/TextCard';
import ImageCard from './types/cards/ImageCard';

import {Bar, Line} from './types/charts/Charts';

const Collection = ({collection, collectionType}) => {
    const collectionTypeName = collectionType.name;

    const items = getComponentsForCollectionType(collectionTypeName, collection);

    const containerClass = `collection collection__type-${collectionTypeName}`;
    const itemWrapperClass = `collection__items collection__items--${collectionTypeName}`;

    return (
        <section className={containerClass}>
            <h1 className="collection__title">
                <Link className="collection__link" to={"/collections/" + collection.id}>{collection.name}</Link>
            </h1>

            <section className={itemWrapperClass}>
                {items}
            </section>
        </section>
    );
};

function getComponentsForCollectionType(type, collection) {
    if (type === types.COLLECTION_TYPE_TABLE) {
        const {columns, rows} = collection.items;

        return <TableCollection columns={columns} rows={rows} />;
    } else if (type === types.COLLECTION_TYPE_CHARTS_BAR) {
        const { labels, data } = collection.items;

        return <Bar labels={labels} data={data} />;
    } else if (type === types.COLLECTION_TYPE_CHARTS_LINE) {
        const { labels, data } = collection.items;

        return <Line labels={labels} data={data} />;
    } else if (type === types.COLLECTION_TYPE_CARDS_TEXT) {
        const {items} = collection;

        return items.map((currentCollection, index) => {
            const {title, description} = currentCollection;

            return <TextCard key={index} title={title} description={description}/>;
        });
    } else if (type === types.COLLECTION_TYPE_CARDS_IMAGE) {
        const {items} = collection;

        return items.map((currentCollection, index) => {
            const {title, description} = currentCollection;

            return <ImageCard key={index} title={title} description={description}/>;
        });
    }
}

Collection.propTypes = {
    collection: PropTypes.object.isRequired,
    collectionType: PropTypes.object.isRequired
};

export default Collection;
