import React, {PropTypes} from 'react';
import Collection from './Collection';

const CollectionList = ({collections}) => {
  return (
    <ul>
        {collections.map((collection, index) =>
            <Collection key={index} collection={collection}/>
        )}
    </ul>
  );
};

CollectionList.propTypes = {
    collections: PropTypes.array.isRequired
};

export default CollectionList;