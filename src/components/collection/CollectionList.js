import React, {PropTypes} from 'react';
import CollectionListRow from './CollectionListRow';

const CollectionList = ({collections}) => {
    console.log(collections);
  return (
    <ul>
        {collections.map((collection, index) =>
            <CollectionListRow key={index} collection={collection}/>
        )}
    </ul>
  );
};

CollectionList.propTypes = {
    collections: PropTypes.array.isRequired
};

export default CollectionList;