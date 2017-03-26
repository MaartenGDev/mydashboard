import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import * as collectionActions from '../../actions/collectionActions';
import {bindActionCreators} from 'redux';
class CollectionsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            collection: { title: '' }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }
    onTitleChange({target}){
        const {collection} = this.state;
        collection.title = target.value;

        this.setState({collection: collection});
    }

    onClickSave(){
        const { collection } = this.state;
        this.props.actions.createCollection(collection);
    }

    collectionRow(collection, index){
        return <li key={index}>{collection.title}</li>;
    }

    render() {
        return (
            <section>
                <h1>Collections {this.state.collection.title}</h1>

                <ul>
                    {this.props.collections.map(this.collectionRow)}
                </ul>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.collection.title}
                />

                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave}
                />
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