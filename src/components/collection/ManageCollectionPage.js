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
        this.redirectToCollectionOverview = this.redirectToCollectionOverview.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.collection._id !== nextProps.collection._id){

            this.setState({
                collection: Object.assign({}, nextProps.collection),
            });
        }
    }


    updateCollectionState({target}){
        const field = target.name;
        let collection = this.state.collection;

        collection[field] = target.value;

        return this.setState({collection});
    }

    saveCollection(event) {
        event.preventDefault();

        this.props.actions.saveCollection(this.state.collection);

        this.redirectToCollectionOverview();
    }

    redirectToCollectionOverview(){
        this.props.history.push('/collections');
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
    actions: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

function getCollectionById(collections, id) {
    const collectionsWithSameId = collections.filter(collection => collection._id === id);

    if(collectionsWithSameId.length) return collectionsWithSameId[0];


    return null;
}

function mapStateToProps(state, ownProps) {
    const collectionId = ownProps.match.params.id;

    let collection = {_id: '', name: '', type: {_id: ""},source: ''};

    if(collectionId !== "create" && state.collections.length) {
        collection = getCollectionById(state.collections, collectionId);
    }

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