import React, {PropTypes} from 'react';
import CollectionListRow from './CollectionListRow';

const CollectionList = ({collections}) => {
  return (
    <ul>
        {collections.map(collection =>
            <CollectionListRow key={collection._id} collection={collection}/>
        )}
    </ul>
  );
};

CollectionList.propTypes = {
    collections: PropTypes.array.isRequired
};

export default CollectionList;