import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as collectionActions from '../../actions/collectionActions';
import {bindActionCreators} from 'redux';
import CollectionList from './CollectionList';
import NoCollectionsFound from './NoCollectionsFound';

class CollectionsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {collections, collectionTypes} = this.props;

        const hasCollections = collections.length > 0 &&  collectionTypes.length > 0;

        return (
            <section className="dashboard">
                {hasCollections ?
                    <section className="container container--fluid">
                       <CollectionList collections={collections} collectionTypes={collectionTypes}/>
                    </section>
                : <NoCollectionsFound/>}
            </section>
        );
    }
}

CollectionsPage.propTypes = {
    collections: PropTypes.array.isRequired,
    collectionTypes: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        collections: state.collections,
        collectionTypes: state.collectionTypes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(collectionActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsPage);