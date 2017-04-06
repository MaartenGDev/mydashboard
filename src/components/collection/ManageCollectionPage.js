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
            errors: {},
            saving: false
        };

        this.updateCollectionState = this.updateCollectionState.bind(this);
        this.saveCollection = this.saveCollection.bind(this);
        this.redirectToCollectionOverview = this.redirectToCollectionOverview.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const {collection} = this.props;

        if (collection._id !== nextProps.collection._id || collection.type._id !== nextProps.collection.type._id) {

            this.setState({
                collection: Object.assign({}, nextProps.collection),
            });
        }
    }


    updateCollectionState({target}) {
        const field = target.name;
        let { collection } = this.state;

        collection[field] = target.value;

        return this.setState({collection});
    }

    saveCollection(event) {
        event.preventDefault();

        this.setState({saving: true});

        this.props.actions.saveCollection(this.state.collection)
            .then(() => {
                this.setState({saving: false})

                this.redirectToCollectionOverview();
            });
        // TODO: Handle validation errors
    }

    redirectToCollectionOverview() {
        this.setState({saving: false});

        this.props.history.push('/');
    }

    render() {
        const {collection, errors, saving} = this.state;
        const {collectionTypes} = this.props;

        return (
            <section className="container container--offset card">
                <h2 className="card__title">Manage Collection</h2>

                <CollectionForm
                    collection={collection}
                    allCollectionTypes={collectionTypes}
                    errors={errors}
                    onSave={this.saveCollection}
                    onChange={this.updateCollectionState}
                    saving={saving}
                />
            </section>
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

    if (collectionsWithSameId.length === 0) return;

    return Object.assign({}, collectionsWithSameId[0]);
}

function mapStateToProps(state, ownProps) {
    const collectionId = ownProps.match.params.id;

    const formattedCollectionTypes = state.collectionTypes.map(type => ({value: type._id, text: type.name}));

    const defaultTypeId = formattedCollectionTypes.length ? formattedCollectionTypes[0].value : "";

    let collection = {_id: '', name: '', type: defaultTypeId, source: ''};

    if (collectionId !== "create" && state.collections.length) {
        collection = getCollectionById(state.collections, collectionId);
    }

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