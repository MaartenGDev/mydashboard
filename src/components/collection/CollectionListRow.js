import React, {PropTypes} from 'react';

const CollectionListRow = ({collection}) => {
  return (
      <li>{collection.name} - {collection.source}</li>
  );
};

CollectionListRow.propTypes = {
    collection: PropTypes.object.isRequired
};

export default CollectionListRow;