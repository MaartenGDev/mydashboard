import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as collectionActions from '../../actions/collectionActions';
import CollectionForm from './CollectionForm';

class ManageCollectionPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            collection: Object.assign({}, props.collection),
            errors: {}
        };

        this.updateCollectionState = this.updateCollectionState.bind(this);

        this.saveCollection = this.saveCollection.bind(this);
    }


    updateCollectionState({target}){
        const field = target.name;
        let collection = this.state.collection;

        collection[field] = target.value;

        return this.setState({collection})
    }

    saveCollection(event) {
        event.preventDefault();

        this.props.actions.saveCollection(this.state.collection);
    }

    render() {
        const {collection, errors} = this.state;
        const {collectionTypes} = this.props;

        return (
            <div>
                <h1>Manage Collection</h1>
                <CollectionForm
                    collection={collection}
                    allCollectionTypes={collectionTypes}
                    errors={errors}
                    onSave={this.saveCollection}
                    onChange={this.updateCollectionState}/>
            </div>
        );
    }
}

ManageCollectionPage.propTypes = {
    collection: PropTypes.object.isRequired,
    collectionTypes: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {

    const collection = {id: '', name: '', type: "",source: ''};

    const formattedCollectionTypes = state.collectionTypes.map(type => ({value: type._id, text: type.name}));

    return {
        collection,
        collectionTypes: formattedCollectionTypes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(collectionActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCollectionPage);