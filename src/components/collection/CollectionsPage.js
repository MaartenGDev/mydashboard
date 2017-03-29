import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import * as collectionActions from '../../actions/collectionActions';
import {bindActionCreators} from 'redux';

class CollectionsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    collectionRow(collection, index){
        return <li key={index}>{collection.title}</li>;
    }

    render() {
        return (
            <section>
                <h1>Collections test: {this.state.collection.title}</h1>

                <ul>
                    {this.props.collections.map(this.collectionRow)}
                </ul>
            </section>
        );
    }
}

CollectionsPage.propTypes = {
    collections: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        collections: state.collections
    };
}

function mapDispatchToProps(dispatch){
  return {
      actions: bindActionCreators(collectionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsPage);