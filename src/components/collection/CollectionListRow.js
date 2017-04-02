import React, {PropTypes} from 'react';
import { Link } from 'react-router-dom';

const CollectionListRow = ({collection}) => {
  return (
      <li><Link to={`/collections/${collection._id}`}>View</Link> - {collection.name} - {collection.source}</li>
  );
};

CollectionListRow.propTypes = {
    collection: PropTypes.object.isRequired
};

export default CollectionListRow;