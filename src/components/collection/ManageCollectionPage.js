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
        }
    }

    render() {
        return (
            <div>
                <h1>Manage Collection</h1>
                <CollectionForm
                    collection={this.state.collection}
                    allTypes={[]}
                    errors={this.state.errors}
                    onSave=""
                    onChange=""/>
            </div>
        );
    }
}

ManageCollectionPage.propTypes = {
    collection: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    let collection = {id: '', name: '', typeId: 0,source: ''};

    return {
        collection,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(collectionActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCollectionPage);