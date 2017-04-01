import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import * as collectionActions from '../../actions/collectionActions';
import {bindActionCreators} from 'redux';
import CollectionList from './CollectionList';

class CollectionsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.redirectToAddCollectionPage = this.redirectToAddCollectionPage.bind(this);
    }

    redirectToAddCollectionPage(){
        this.props.history.push('/collections/create');
    }

    render() {
        const {collections} = this.props;

        return (
            <section>
                <h1>Collections</h1>
                <CollectionList collections={collections} />

                <input
                    type="submit"
                    value="Create Collection"
                    onClick={this.redirectToAddCollectionPage} />
            </section>
        );
    }
}

CollectionsPage.propTypes = {
    collections: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
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