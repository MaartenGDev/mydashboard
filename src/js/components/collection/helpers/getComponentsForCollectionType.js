import React from 'react';
import * as types from '../collectionTypes';

import TableCollection from '../types/TableCollection';

import TextCard from '../types/cards/TextCard';
import ImageCard from '../types/cards/ImageCard';

import LineChart from '../types/charts/LineChart';
import BarChart from '../types/charts/BarChart';

export default function getComponentsForCollectionType(type, collection) {
    // Charts
    const isLineChart = type === types.COLLECTION_TYPE_CHARTS_LINE;
    const isBarChart = type === types.COLLECTION_TYPE_CHARTS_BAR;

    // Cards
    const isTextCard = type === types.COLLECTION_TYPE_CARDS_TEXT;
    const isImageCard = type === types.COLLECTION_TYPE_CARDS_IMAGE;

    // Table
    const isTable = type === types.COLLECTION_TYPE_TABLE;


    if (isTable) {
        return getTableCollection(collection);
    }else if (isLineChart || isBarChart) {
        return getChartCollection(collection, isLineChart);
    }else if (isTextCard || isImageCard) {
        return getCardCollection(collection, isImageCard);
    }
}


function getTableCollection(collection){
    const {columns, rows} = collection.items;

    return <TableCollection columns={columns} rows={rows}/>;
}

function getChartCollection(collection, isLineChart){
    const {title, labels, data} = collection.items;

    return isLineChart ?
        <LineChart title={title} labels={labels} data={data}/> :
        <BarChart title={title} labels={labels} data={data}/>;
}

function getCardCollection(collection, isImageCard){
    const {items} = collection;

    return items.map((currentCollection, index) => {
        const {image, title, description} = currentCollection;

        return isImageCard
            ? <ImageCard image={image} key={index} title={title} description={description}/>
            : <TextCard key={index} title={title} description={description}/>;
    });
}